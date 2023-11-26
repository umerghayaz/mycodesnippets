import { useMediaQuery } from "react-responsive";
import { Layout, Menu, Breadcrumb, Col, Tooltip, Row, Drawer } from "antd";
import logo from "./images/logo.png";
import './Sidebar.css';
import { MdOutput, MdInput } from "react-icons/md";
import { BiNoEntry } from "react-icons/bi";
import {
  FileOutlined,
  PieChartOutlined,
  DesktopOutlined,
  TeamOutlined,
  UserOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Sidebar({ collapsed, onClose }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const items = (
    <>
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        style={{ height: "100%",width:'100%',background:'#0174BE'}
      }
      >
        <div
          className="logo"
          style={{
            textAlign: "center",
            height: "30px",
            marginBottom: "40px",
            position: "relative",
            top: "15px",
          }}
        >
          {collapsed ? (
            <img src={logo} alt="App logo" width={70} />
          ) : (
            <img src={logo} alt="App logo" height={40} width={120} />
          )}
          {/* <img src={logo} alt="App logo" width={120} style={{
                            verticalAlign: 'center '
                        }} /> */}{" "}
        </div>

        <Menu.Item key="1">
          <PieChartOutlined />
          <span>Option 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <DesktopOutlined />
          <span>Option 2</span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <UserOutlined />
              <span>User</span>
            </span>
          }
        >
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <TeamOutlined />
              <span>Team</span>
            </span>
          }
        >
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9">
          <FileOutlined />
        </Menu.Item>
      </Menu>
    </>
  );
  return (
    <>
      {" "}
      {isTabletOrMobile && (
        <Drawer
          className="hideOnDesktop"
          title={false}
          closeIcon={<CloseOutlined />}
          placement="left"
          onClose={onClose}
          visible={collapsed}
          style={{background:'#FFF0CE'}}

        >
          {items}{" "}
        </Drawer>
      )}
      {!isTabletOrMobile && (
        <Sider
          theme="light"
          width={200}
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{background:'#FFF0CE'}}
        >
          {items}{" "}
        </Sider>
      )}{" "}
    </>
  );
}

export default Sidebar;
