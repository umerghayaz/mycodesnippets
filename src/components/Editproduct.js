import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Tabs, Form, Input, Radio, Select, Button, message, Upload, InputNumber } from 'antd'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
function Editproduct() {
    let [form] = Form.useForm();
  const navigate = useNavigate()
  const [Apidata, setApidata] = useState();
  let id = useParams()
  const getData = () => {
    axios.get(`https://639b1ae531877e43d682709d.mockapi.io/crud/${id.id}`)
        .then((getData) => {
            console.log(getData.data)
            // setApidata(getData.data)
            localStorage.setItem('ID', getData.data.id);
        localStorage.setItem('FirstName', getData.data.firstName);
        localStorage.setItem('LastName', getData.data.lastName);
            // setapidata(getData.data);
            //  console.log(getData.data);

         })
}
  useEffect(() => {
    console.log("dataaphelloi-->", id.id)
//    console.log(localStorage.getItem('FirstName'),'hello')
//     const lastname=localStorage.getItem('Last Name')

    getData()
    // console.log(Apidata,'nma')
    // setApidata(data)
  }, [Apidata]);
const handleSubmit = (formData) => {
    axios.put(`https://639b1ae531877e43d682709d.mockapi.io/crud/${id.id}`, formData).then(() => {
        navigate('/Products')
        console.log(formData);
    })
   
  };
useEffect(() => {
    form.setFieldsValue({
      'firstName': localStorage.getItem('FirstName'), 'lastName': localStorage.getItem('LastName')

    })
  }, [localStorage.getItem('First Name'), localStorage.getItem('Last  Name')])
  return (
    <div style={{ width: '100%', margin: '0 auto', padding: '100px 20px' }}>
    <Row>
      <Col md={24} sm={24} lg={24} xl={24}>
        <Card>
          <Form layout="horizontal" form={form}
            labelCol={{
              span: 5
            }}
            wrapperCol={{
              span: 22
            }} labelAlign="left" onFinish={handleSubmit}>

            <Form.Item name="firstName" label="firstName"
              rules={
                [{
                  required: true,
                  message: "Please input Description."
                },]
              }>
              <Input 
              value={localStorage.getItem('FirstName')}

              />
            </Form.Item>
            <Form.Item name="lastName" label="lastName"
              rules={
                [{
                  required: true,
                  message: "Please input Description."
                },]
              }>
              <Input 
              value={localStorage.getItem('LastName')}
              />
            </Form.Item>

            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>

              <Form.Item>
                <Button
                  size="large"
                  type="primary"
                  style={{ borderRadius: '20px', height: '40px', width: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  block
                  htmlType="submit"
                >
                  submit
                </Button>
              </Form.Item>
            </div>

          </Form>
        </Card>
      </Col>
    </Row>
  </div>
  )
}

export default Editproduct
