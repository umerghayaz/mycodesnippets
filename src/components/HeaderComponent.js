import { Layout, Menu, Row, Col, Dropdown, Button, Avatar } from "antd";
import {
  DownOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
// import { useDispatch } from "react-redux";
// import { logoutUser } from "../Actions/UserAction";
// import { Link } from "react-router-dom";
import logo from "../Assets/LOGO.png";
import React from "react";

const { Header } = Layout;
const { SubMenu } = Menu;

const HeaderComponent = ({ setToggled,  isToggled }) => {
  // const dispatch = useDispatch();

  const menu = (
    <Menu>
      <Menu.Item
        // onClick={() => dispatch(logoutUser())}
        icon={<LogoutOutlined />}
        key="logoutMenu"
      >
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <Header
      className="site-layout-sub-header-background"
      style={{padding: 0, background: "#0174BE" }}
    >
      <Menu selectable={false} mode="horizontal" style={{justifyContent:'center'}} >
        {/* {!User.loggedIn && ( */}
          <Row>
            <Col span={14} offset={10}>
              <Menu.Item key="logoMenu">
                {/* <Link to="/"> */}
                  <img style={{ height: "40px" }} src={logo} alt="App logo" />
                {/* </Link> */}
              </Menu.Item>
            </Col>
          </Row>
        {/* )} */}
      </Menu>
      {/* {User.loggedIn && ( */}
        <>
          <div style={{ float: "left" , marginLeft:'10px'}}>
            {React.createElement(
              isToggled ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick:() => isToggled ? setToggled(false) : setToggled(true)
              }
            )}
          </div>
          <div style={{ float: "right",marginRight:'10px' }} >
            <Dropdown overlay={menu} >
              <div>
                <span
                  id="iconMenu"
                  style={{ marginRight: 4, cursor: "pointer" }}
                > 
                {/* {localStorage.getItem('username')} */}
                  <Avatar icon={<UserOutlined />} style={{ height:'40px', marginLeft:'10px',width:'40px', justifyContent:'center'}} /> 
                </span>
              </div>
            </Dropdown>
          </div>
        </>
      {/* )} */}
    </Header>
  );
};

export default HeaderComponent;