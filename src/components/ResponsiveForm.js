import React, { useState } from "react";

import {
    Button,
    Card,
    Form,
    Input,
    Row,
    Col,
    Select,
    Option,
    Field, Typography, Avatar
} from "antd";
import axios from "axios";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { AiOutlineUser } from "react-icons/ai";

const { Title } = Typography;
const avatarStyle = { backgroundColor: "#1bbd7e", margin: "0 auto",width:'100px',height:'100px' };
const headerStyle = { margin: 25 ,color: "#1bbd7e"};
function ResponsiveForm() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#1bbd7e",
        }}>
            <Card style={{ width: 500,backgroundColor: "#F5F5F5", }}  >
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {/* <Title level={2}>Company Logo </Title> */}
                    <Avatar style={avatarStyle} >
                        <AiOutlineUser   style={{ fontSize: '100px'}} />
                    </Avatar>

                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {/* <Title level={2}>Company Logo </Title> */}
                    <h2 style={headerStyle}>LoginForm</h2>
                    

                </div>

                <Form
                    layout="vertical"
                    name="login-form"
                >
                    <Form.Item
                        name="email"

                    >
                        <Input placeholder="Email" 
                            prefix={<MailOutlined className="text-primary" />}
                        />
                    </Form.Item>
                    <Form.Item
                        name="name"

                    >
                        <Input placeholder="Name" 
                            prefix={<MailOutlined className="text-primary" />}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            block
                            style={{ backgroundColor: "#1bbd7e"}}
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default ResponsiveForm