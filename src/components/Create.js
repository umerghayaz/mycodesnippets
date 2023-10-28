import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [id, setID] = useState('');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        var valueID = localStorage.getItem('ID');
        var valuetitle = localStorage.getItem('title');
        var valuedescription = localStorage.getItem('description');

        setID(valueID)
        setTitle(valuetitle);
        setDescription(valuedescription);
    console.log(valueID,'valueID')
   
    }, []);
    var valueID = localStorage.getItem('ID');

    const updateAPIData = () => {
        axios.put(`http://127.0.0.1:5000/users/${valueID}`, {
            title,
            description,
        }).then(() => {
            // navigate('/read')
            // history.push('/read')
        })
    }
  return (
    <div style={{
        display: 'block', width: 700, padding: 30
    }}>
    <Form
    name="wrap"
    labelCol={{
      flex: '110px',
    }}
    labelAlign="center"
    labelWrap
    wrapperCol={{
      flex: 1,
    }}
    colon={false}
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      label="title"
      name="title"
      value={title} onChange={(e) => setTitle(e.target.value)}

      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="description"
      name="description"
      value={description} onChange={(e) => setDescription(e.target.value)}
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item label=" ">
      <Button type="primary" htmlType="submit" onClick={updateAPIData()}>
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>

  )
}

export default Create
