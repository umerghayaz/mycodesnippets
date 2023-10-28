import {
    DashboardOutlined,
    FileTextOutlined,
  } from "@ant-design/icons";
  import { Menu, Drawer } from "antd";
  import { useEffect, useState } from "react";
  import Sider from "antd/es/layout/Sider";
  import logo from "../Assets/LOGO.png";
  import small from "../Assets/favicon.png";
  // import { MdQueuePlayNext, TiFlowSwitch, RiRecordCircleLine } from "react-icons/all";
  import { HiQueueList, } from "react-icons/hi2";
  import { HiOutlineDocumentReport } from "react-icons/hi";
  import { RiRecordCircleLine } from "react-icons/ri";

  const { SubMenu } = Menu;
  const rootSubmenuKeys = ["sub1", "sub2"];
  
  const Sidermenu = ({ isToggled, setToggled }) => {
    const [openKeys, setOpenKeys] = useState([]);
    const [selectedKey, setSelectedKey] = useState("/");
    // let location = useLocation();
  
    // useEffect(() => {
    //   setSelectedKey(location.pathname);
    // }, [location]);
  
    const onOpenChange = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };
  
    const menu = (
      // <CustomScrollDiv>
          <Menu
        style={{ height: "100%" }}
        mode="inline"
        selectable={true}
        defaultSelectedKeys={[selectedKey]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        <div
          className="logo"
          style={{ textAlign: "center", height: "45px", marginBottom: "40px" }}
        >
          {/* <Link to="/dashboard"> */}
            {/* style={{width: isToggled ? "" : "110px"}} */}
            <img
              src={isToggled ? small : logo}
              alt="App logo"
              style={{ width: "auto", height: "60px" }}
            />
          {/* </Link> */}
        </div>
        <Menu.Item
          onClick={() => setToggled(false)}
          key="/"
          icon={<DashboardOutlined />}
        >
            Dashboard
          {/* <Link to="dashboard">Dashboard</Link> */}
        </Menu.Item>
        <Menu.Item
          onClick={() => setToggled(false)}
          key="campaign"
          icon={<FileTextOutlined />}
        >            Campaign List

          {/* <Link to={"/campaign"}>
            Campaign List
          </Link> */}
        </Menu.Item>
       {/* <Menu.Item
          onClick={() => setToggled(false)}
          key="callflow"
          icon={<TiFlowSwitch />}
        >
          <Link to={"/callflow"}>Call Flow</Link>
        </Menu.Item> */}
        {/* <Menu.Item
          onClick={() => setToggled(false)}
          key="settings"
          icon={<CodepenCircleOutlined />}
        >
          <Link to={"/settings"}>Settings</Link>
        </Menu.Item> */}
        <Menu.Item
          onClick={() => setToggled(false)}
          key="Queue Monitor"
          icon={<HiQueueList />}
        >Queue Monitor
          {/* <Link to={"/queue"}>Queue Monitor</Link> */}
        </Menu.Item> 
        <Menu.Item
          onClick={() => setToggled(false)}
          key="Recordings"
          icon={<RiRecordCircleLine />}
        >Recordings
          {/* <Link to={"/recordings"}>Recordings</Link> */}
        </Menu.Item>
        <SubMenu title="Reports" key="sub1" icon={<HiOutlineDocumentReport/>}>
        <Menu.Item
          onClick={() => setToggled(false)}
          key="cdr-reports"
          icon={<HiOutlineDocumentReport />}
        >CDR Reports
          {/* <Link to={"/report-filter"}>CDR Reports</Link> */}
        </Menu.Item>
        
        <Menu.Item
          onClick={() => setToggled(false)}
          key="overall-reports"
          icon={<HiOutlineDocumentReport />}
        >Overall Summary Report
          {/* <Link to={"/overall-reports"}>Overall Summary Report</Link> */}
        </Menu.Item>
        </SubMenu>
      </Menu>
      // </CustomScrollDiv>
    );
  
    return (
      <>
  
        <Sider
          
        breakpoint="lg"
        collapsedWidth="0"
          width={320}
          // style={{ overflow: "auto" }}
          trigger={null}
          className="on-desktop"
          collapsible
          collapsed={isToggled}
          >
          {menu}
        </Sider>
        
        <Drawer
          // style={{ padding: 0 }}
          width={400}
          placement="left"
          className="on-mobile"
          onClose={() => setToggled(false)}
          visible={isToggled}
        >
          {menu}
        </Drawer>
      </>
    );
  };
  
  export default Sidermenu;