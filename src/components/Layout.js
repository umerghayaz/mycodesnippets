import React, { useEffect, useState } from "react";
import {  Layout } from "antd";
// import "../App.less";
// import Sidermenu from "../components/Sidermenu";
import HeaderComponent from "./components/HeaderComponent";
import Sidermenu from "./components/Sidermenu";
import Header1 from "./Header";
// import { openNotificationWithIcon } from "../Shared/notification";
const {  Footer } = Layout;

function App() {
  const [isToggled, setToggled] = useState(false);
  const [login, setLogin] = useState();
  // const toggleTrueFalse = () => setToggled(!isToggled);
  const onClose = () => {
    setToggled(true);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
        <Sidermenu
          onClose={onClose}
          isToggled={isToggled}
          setToggled={setToggled}
        />
      <Layout style={{ background: "#f4f5f6" }}>
        <Header1

          style={{ float: "right" }}
          // User={User}
          setToggled={setToggled}
          isToggled={isToggled}
        />
        {/* <ContentComponent /> */}
        <Footer
          style={{
            textAlign: "center",
            fontWeight: "bold",
            background: "#f4f5f6",
            color: "#1E4896",
          }}
        >
          Sonus ©2021 | Powered by Telecard Ltd.
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
