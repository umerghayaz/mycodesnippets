import React from 'react'
import { Avatar,Row,Col, Card, Skeleton, Switch } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AppstoreOutlined,EditOutlined, EllipsisOutlined, DatabaseOutlined 
  } from '@ant-design/icons';
function Dascards() {
    const { Meta } = Card;
    const customAction = (
        <span style={{marginRight:'200px'}}>
           <EditOutlined key="edit" />Edit
        </span>
      );
  return (
    <div>
      <Row gutter={16}>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <Card
          style={{
            width: '100%', // Use percentage to make it responsive
          }}
          bordered={false}
          actions={[customAction]}
        >
          <Meta
            avatar={<DatabaseOutlined style={{ fontSize: 50 }} />}
            title={<span style={{ fontSize: 18 }}>Capacity</span>}
            description={<span style={{ fontSize: 20, fontWeight: 'bold' }}>105GB</span>}
          />
        </Card>
      </Col>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <Card style={{ background: "#ffc107" }} extra={<AppstoreOutlined />} title="Profit" bordered={false}>
          123M$ <AppstoreOutlined />
        </Card>
      </Col>
    </Row>
    </div>
  )
}

export default Dascards
