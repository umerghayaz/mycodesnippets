import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";

import Header1 from "./Header";

import { Button, Layout, Modal, Space } from "antd";
import ResponsiveForm from "./ResponsiveForm";

const { Sider, Header, Content, Footer } = Layout;



function Layoutmain() {
  const [collapsed, setCollapsed] = useState(false);
  const onClose = () => {
    setCollapsed(false);
  };
  return (
    <Layout style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <div className="demo-logo-vertical" />

      <Sidebar collapsed={collapsed} onClose={onClose} />
      <Layout>
        <Header1 collapsed={collapsed} setCollapsed={setCollapsed} />

        <Content>
        {/* <ResponsiveForm/> */}
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Copyright @ 2023. Developed by Umer .
        </Footer> */}
          <Footer
          // style={{
          //   textAlign: "center",
          //   fontWeight: "bold",
          //   background: "#f4f5f6",
          //   color: "#1E4896",
          // }}
          // style={{ 
          //   borderTop: '1px solid #e8e8e8',
          //   position: 'fixed',
          //   left: 0,
          //   bottom: 0,
          //   width: '100%',
          //   backgroundColor: 'white',
          //   textAlign: 'center',
          //   display: 'flex',}}
          style={{ 
            borderTop: '1px solid #e8e8e8',
            position: 'fixed',
            left: 0,
            bottom: 0,
            right:0,
            width: '100%',
            backgroundColor: '#0174BE',
            textAlign: 'center',
            }}
            >
        
           ©2023 | Powered by Telecard Ltd.
        </Footer>
      </Layout>
      
    </Layout>
  );
}

export default Layoutmain;
