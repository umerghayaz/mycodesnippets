import React,{useEffect,useState,useCallback} from 'react'
import axios from 'axios';
import {
    Card, Table, Divider, Row, Menu, Col, Dropdown,Button, Popconfirm,notification,Space,
  
  } from 'antd';
import { DeleteOutlined, EditOutlined, EditFilled, PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
function Products() {
    const handleDelete = useCallback((item) => {
        axios.delete(`https://639b1ae531877e43d682709d.mockapi.io/crud/${item}`)
     .then(() => {
        Deletenotification('success')
        getData();
        
    })
    });
    const history=useNavigate()
    const Deletenotification = (type) => {
        notification[type]({ message: 'Success', description: 'record deleted succesfully' });
    };
    const [APIData, setAPIData] = useState([]);
    const columns = [
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'firstName',
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName',
        },
        , {
          title: "Actions",
          key: "action",
          render: (text, item) => (
              <Space size="middle">
  
  <Link to={`Editproduct/${item.id}`}>
  <Button title="Edit"
                      
                      icon={<EditFilled />}
                      type="primary" />          </Link>
                  
                  <Button title="Delete"
                      onClick={
                          () => handleDelete(item.id)
                      }
  
                      icon={<DeleteOutlined />} />
                  <Popconfirm title="Delete the task" description="Are you sure to delete this task?" onConfirm={() => handleDelete(item.id)} okText="Yes" cancelText="No">
                      <Button danger="danger"
                          icon={<DeleteOutlined />}></Button>
                  </Popconfirm>
  
              </Space>
          )
      },
      
      ];
    useEffect(() => {
        getData()
    }, [])
    const getData = useCallback(() => {
        axios.get(`https://639b1ae531877e43d682709d.mockapi.io/crud`)
            .then((getData) => {
                 setAPIData(getData.data);
                 console.log(getData.data);

             })
    })
  return (
    <div style={{ width: '100%', margin: '0 auto', padding: '100px 20px' }}>
    <Row>
    <Divider orientation="center">Outbound Routes</Divider>
      <Col span={24}>
        <>
          <Button style={
            {  justifyContent: "center", marginBottom: "10px",marginLeft: "1px"  } } onClick={() => history("/InboundForm")}>
            <PlusCircleOutlined /> Add Inbound Route</Button>
        </>
      </Col>
      <Col md={24} lg={24} xl={24}>
        <Card >
          <Table columns={columns} dataSource={APIData} size="large" scroll={{ x: 800 }} />
        </Card>
      </Col>
    </Row>
  </div> 

  )
}

export default Products
