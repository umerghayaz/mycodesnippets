import {Button, Card, DatePicker, Form, Input, Spin, Table} from "antd";
// import apiClient from "../../Shared/apiClient";
import React, { useState, useEffect } from "react";
import {format} from "date-fns";
import {CloudDownloadOutlined} from "@ant-design/icons";
// import { CSVLink } from "react-csv"

export const AgentLoginReport = () => {

    // const getAgentLoginData = data => apiClient.post(`/api/report/agent-login`, data)
    const [loading, setLoading] = useState(false)
    const [date, setDate] = useState(new Date(Date.now()))
    const [data, setData] = useState([])

    useEffect(() => {
        console.log(new Date(Date.now()))
    }, [])

    const columns = [
        {
            title: 'Agent Name',
            dataIndex: 'agentName',
            key: 'agentName'
        },
        {
            title: 'Agent',
            dataIndex: 'agent',
            key: 'agent'
        },
        {
            title: 'Duration (hh:mm:ss)',
            dataIndex: 'time_diff',
            key: 'time_diff'
        },
        {
            title: 'Login time',
            dataIndex: 'login_time',
            key: 'login_time'
        },
        {
            title: 'Logout time',
            dataIndex: 'logout_time',
            key: 'logout_time'
        }
    ]

    const handleSubmit = values => {
        console.log('hello',date)
    }

    const downloadCSV = () => {
        console.log('download csv')
    }

    // const title = <div style={{ textAlign: 'right' }}>
    //     <CSVLink filename="DailyLoginReport.csv" data={data} target="_blank"><Button icon={<CloudDownloadOutlined />}>Download CSV</Button></CSVLink>
    // </div>

    return(
        <>
            <Card style={{ marginBottom: 10 }} title="Daily login report" bordered={false} hoverable={true}>
                <Form onFinish={handleSubmit} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Form.Item colon={false} name="date" label="Date" rules={[{ required: true }]}>
                        <DatePicker onChange={(date, dateString) => setDate(dateString)} format="YYYY-MM-DD" style={{ width: '50%' }} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Card>
            <Spin spinning={loading}>
                <Table  dataSource={data} columns={columns} scroll={{x:1100}} />
            </Spin>
        </>
    )
}