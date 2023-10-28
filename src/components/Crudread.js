import React, { useEffect, useState } from 'react';
import { Space, Table, Tag,Button ,Row , Modal,Col,Popconfirm} from 'antd';
import axios from 'axios';
import { Link } from "react-router-dom";

const { Column,ColumnGroup } = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const CrudRead = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

  const showModal = () => {
    setIsModalOpen(true);

  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const Data = (id,title,description) => {
    console.log(id,title,description)
    localStorage.setItem('ID', id);
    localStorage.setItem('title', title);
    localStorage.setItem('description', description);
    console.log(localStorage.getItem('ID'))
}
  const [APIData, setAPIData] = useState([]);
  const onDelete = (id) => {
    console.log(id)
    axios.delete(`http://127.0.0.1:5000/users/${id}`)
 .then(() => {
    getData();
})
}
useEffect(() => {  getData()  }, [])


    const getData = () => {
    axios.get(`http://127.0.0.1:5000/users`)
        .then((response) => {
          console.log(response.data)
            setAPIData(response.data);
        })
}
const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Checkbox Value', checkbox)
}

  return (
  <Row  gutter={[16, 16]}><Col span={24}>
  <div style={{marginTop:'200px',marginLeft:'450px'}}  >

    <Space wrap>
    <Button type="primary">Add DATA</Button>
    
  </Space>
  <Table    dataSource={APIData} style={{width:'800px'}}>

    {/* <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup> */}
        <Column title="Id" dataIndex="id" key="id" />

    <Column title="Title" dataIndex="title" key="title" />
    <Column title="description" dataIndex="description" key="description" />
    
    <Column
      title="Action"
      key="action"
      render={(text, APIData ) => (
        <Space size="middle">
          <a onClick={() => Data(APIData.id,APIData.title,APIData.description)}>      <Link to="Create">Update</Link>
</a>
          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
          <Popconfirm title="Sure to delete?" onConfirm={() => onDelete(APIData.id)}>
            <a>Delete</a>
          </Popconfirm>
          {/* <a  onClick={() => onDelete(APIData.id)}>Delete </a> */}
          
        </Space>
      )}
      

    />
    
  </Table>    </div></Col></Row>

)};
export default CrudRead;