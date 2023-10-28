import React from "react";
import { Layout, Row, Col,Button, Typography, Menu, Dropdown, Avatar } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
const items = [
  {
    label: <a href="">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
const { SubMenu } = Menu;
function Header1({ collapsed, setCollapsed }) {
  return (
    //     <Row justify='center'>
    //     <Col xl={24} lg={24} md={24} sm={24} xs={24}>
    //       <Header className='header-fixed'>
    //         <Row>
    //           <Col xl={12} lg={12} md={12} sm={12} xs={12}>
    //             <Title id='title-button' level={4}>
    //               <a >My App</a>
    //             </Title>
    //           </Col>
    //           <Col xl={12} lg={12} md={12} sm={8} xs={8} align="right">
    //             <Menu
    //               theme='dark'
    //               mode='horizontal'
    //               defaultSelectedKeys={["item1"]}
    //             //   overflowedIndicator={<MenuOutlined />}
    //             >
    //               <Menu.Item
    //                 key="item1"
    //               >
    //                 item1
    //               </Menu.Item>

    //             </Menu>
    //           </Col>
    //         </Row>
    //       </Header>
    //     </Col>
    //   </Row>

    <Header style={{ padding: 0, background: "#fff" }}>
      <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                /> 
      {" "}
      <>
        <div style={{ float: "right", marginRight: "30px" }}>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <div>
              <span id="iconMenu" style={{ marginRight: 4 }}>
                <Avatar
                  icon={<UserOutlined />}
                  style={{
                    height: "40px",
                    marginLeft: "10px",
                    width: "40px",
                    justifyContent: "center",
                  }}
                />
              </span>
            </div>
          </Dropdown>
        </div>{" "}
      </>{" "}
    </Header>
  );
}

export default Header1;
