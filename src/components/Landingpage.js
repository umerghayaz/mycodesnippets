import React,{useState} from "react";
import { useMediaQuery } from "react-responsive";
import { Form, Input, Button, Checkbox, Card ,Drawer} from "antd";
import { Col, Divider,Menu,  Layout, Row, Space, Tooltip } from "antd";
import BgCover from "../Assets/bg-cover.jpg";
import { UserOutlined, LockOutlined,  CloseOutlined,MenuOutlined
} from "@ant-design/icons";
import { Typography } from "antd";
import developer from "../Assets/developer.svg";
import graphs from "../Assets/graphs.svg";
import notes from "../Assets/notes.svg";
import product from "../Assets/product.svg";
import waving from "../Assets/waving.svg"
import './Layout.css'
const { Title,Text } = Typography;
const { SubMenu } = Menu;

const Landingpage = () => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
    const [open, setOpen] = useState(false);
    const onClose = () => {
        setOpen(false);
      };
      const showDrawer = () => {
        setOpen(true);
      };
  const cardGradient =
    "linear-gradient(146deg, rgba(29,51,123,1) 15%, rgba(247,189,22,1) 85%)";
  const textColor = "#1D337B";
  let headerStyle = {
    background: "none",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const footerStyle = {
    textAlign: 'center',
    // color: '#fff',
    backgroundColor: 'rgb(241, 242, 243)',
  };
  const items = (
    <>
     <Menu mode="horizontal" style={{ background:'none',marginRight: '100px' }}>
            <Menu.Item key="1" style={{ marginRight: '40px' ,borderBottom: 'none' }}>About</Menu.Item>
            <Menu.Item key="2" style={{ marginRight: '40px',borderBottom: 'none'  }}>Mission</Menu.Item>
            <Menu.Item key="3" style={{ marginRight: '40px',borderBottom: 'none'  }}>Product</Menu.Item>
            <Menu.Item key="4" style={{ marginRight: '40px',borderBottom: 'none'  }}> <Button style={{
                      padding: "0px 120px 0px 40px",
                     width:'90px',
                     height:'50px'
        
                    }}>Your Button</Button></Menu.Item>

          </Menu>
    </>
  );
  const itemsvertical = (
    <>
     <Menu mode="vertical" style={{ background:'none',textAlign: 'center'  }}>
            <Menu.Item key="1" >About</Menu.Item>
            <Menu.Item key="2" >Mission</Menu.Item>
            <Menu.Item key="3" >Product</Menu.Item>
            <Button
            
            className="kUKWMY"
                    >Your Button</Button>

          </Menu>
    </>
  );
  return (
    <Layout>
{!isTabletOrMobile && (
       <Layout.Header style={headerStyle} >
       {/* <div className="logo" ><Title style={{marginLeft:'80px'}}level={1}>Landy</Title>
       </div> */}
      <span style={{ marginLeft: '80px', fontSize: '1.5em', fontWeight: 'bold', }}>
      Landy           </span>
           {items}
 
          
    
       
       </Layout.Header>
      )}
       {isTabletOrMobile && (
       <Layout.Header style={headerStyle} >
       {/* <div className="logo" ><Title style={{marginLeft:'80px'}}level={1}>Landy</Title>
       </div> */}
      <span style={{ marginLeft: '80px', fontSize: '1.5em', fontWeight: 'bold', }}>
             Landy
           </span>
 
           {isTabletOrMobile && (
         <Button type="primary" onClick={showDrawer} style={{background:' rgb(46, 24, 106);'}}>
         <MenuOutlined/>
       </Button>
       )}
       {/* {!isTabletOrMobile && (
        
           {items}
       )} */}
        <Drawer
         title="Menu"
         width={300}
         onClose={onClose}
         open={open}
         closable={false}


         extra={
           <Space>
             <Button onClick={onClose}><MenuOutlined/></Button>
             
           </Space>
         }
       >
        {itemsvertical}
       </Drawer>
       </Layout.Header>
      )}{" "}
      <Layout.Content style={{}}>
        <div style={{ width: "80%", margin: "0 auto" }}>
          <div style={{ width: "100%", margin: "0 auto" }}>
            <Row>
              <Col xl={12} lg={12} sm={24} xs={24}>
                <Title level={1} style={{marginLeft:'1px',marginTop:'20px' }}>
                  Landing page template for developers & startups
                </Title>
                <Title level={4} style={{ marginLeft:'1px'}}>
                  Beautifully designed templates using React.js, ant design and
                  styled-components! Save weeks of time and build your landing
                  page in minutes.
                </Title>
                <div>
                  {" "}
                  <Button
                    style={{
                      padding: "0px 20px 0px 30px",
                      height: "50px",
                      width: "40%",
                    }}
                  >
                    Primary Button
                  </Button>
                  <Button
                    style={{
                      margin: "20px 42px 40px 41px",
                      padding: "0px 20px 0px 30px",
                      height: "50px",
                      width: "40%",
                    }}
                  >
                    Primary Button
                  </Button>
                </div>{" "}
              </Col>

              <Col lg={12} sm={24} xl={12} xs={24}>
                <img src={developer} alt="developer" />
              </Col>
            </Row>
          </div>
          <div style={{ width: "80%", margin: "0 auto" }}>
            <Row>
              <Col
                xl={24}
                sm={24}
                lg={24}
                xs={24}
               
              >
                <Title style={{ textAlign: "center", fontSize: "80px" }}>
                  Introduce your product quickly & effectively
                </Title>
                <Title level={4} style={{ textAlign: "center" }}>
                  Landy comes with multi-lingual support, all of the content is
                  stored in the JSON files, so that you can manage the texts
                  without having any prior knowledge in developing web
                  applications using React.js.
                </Title>
                <div style={{ paddingLeft: "10px" }}>
                  <Button
                    style={{
                      margin: "20px 42px 40px 321px",
                      padding: "0px 20px 0px 30px",
                      height: "50px",
                      width: "20%",
                    }}
                  >
                    Primary Button
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
          {/* <div style={{ width: '100%', margin: '0 auto' }}>
                        <Row>
                            <Col xl={12} sm={12} lg={12} xs={12}>
                            <img src={graphs} alt="graphs" />
                            </Col>
                            <Col xl={12} sm={12} lg={12} xs={12}>
                            <Title >Introduce your product quickly & effectively</Title>
                            <Title level={3}>This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.</Title>
                            </Col>
                        </Row>
                    </div> */}

          <div style={{ width: "100%", margin: "0 auto" }}>
            <Row>
              <Col lg={12} sm={24} xl={12} xs={24}>
                <img src={graphs} alt="graphs" style={{ marginTop: "120px" }} />
              </Col>
              <Col xl={12} lg={12} sm={24} xs={24}>
                <Title style={{ marginLeft: "50px" }}>
                  Light, fast & responsive
                </Title>
                <Title level={4} style={{ marginLeft: "50px" }}>
                  This template is ready to use, so you don't need to change
                  anything at a component level, unless you want to customize
                  the default styling.
                </Title>
                <div>
                  <Row>
                    <Col xl={12} lg={12} sm={12} xs={12}>
                      {" "}
                      <img
                        src={notes}
                        alt="developer"
                        style={{
                          marginLeft: "50px",
                          width: "60px",
                          height: "60px",
                        }}
                      />{" "}
                      <Title level={4}  style={{ marginLeft: "50px" }}>WHY ANTD?</Title>
                      <p style={{ marginLeft: "50px" }}>
                        Ant Design is a React UI library that has a lot of
                        easy-to-use components for building elegant UI.
                      </p>
                    </Col>
                    <Col xl={12} lg={12} sm={12} xs={12}>
                      {" "}
                      <img
                        src={notes}
                        alt="developer"
                        style={{
                          marginLeft: "50px",
                          width: "60px",
                          height: "60px",
                        }}
                      />{" "}
                      <Title level={4}  style={{ marginLeft: "50px",whiteSpace:'nowrap' }}>WHY STYLED-COMPONENTS?</Title>
                      <p level={5} style={{ marginLeft: "50px" }}>
                      Styled Components gives you total control over your components.
                      </p>{" "}
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <div style={{ width: "100%", margin: "0 auto" }}>
            <Row>

              <Col xl={12} lg={12} sm={24} xs={24}>
                <Title level={1} style={{ marginLeft:'1px',marginTop:'100px'}}>
                Ready made sections                </Title>
                <Title level={3} style={{  marginLeft:'1px'}}>
                Landy comes with a set of ready to use sections to help you easily create a landing page for your own brand, with all the content your startup desires. In order to replace any dummy elements (text, image, etc..) all you need to do is go to content folder and input your real content.
                </Title>
                <div>
                  {" "}
            
                </div>{" "}
              </Col>

              <Col lg={12} sm={24} xl={12} xs={24}>
                <img src={product} alt="product" style={{  marginLeft:'50px',marginTop:'100px'}} />
              </Col>
            </Row>
          </div>
          <div style={{ width: "100%", margin: "0 auto" }}>
            <Row>

              

              <Col lg={12} sm={24} xl={12} xs={24}>
                <img src={waving} alt="waving" style={{  marginTop:'60px'}} />
              </Col>
              <Col xl={12} lg={12} sm={24} xs={24}>
                <Title level={1} style={{ marginLeft:'100px',marginTop:'100px'}}>
                That's about it!              </Title>
                <Title level={3} style={{  marginLeft:'100px'}}>
                If you are familiar with React, or SPA frameworks in general, there shouldn't be any confusing parts about this template. if not, you can always reach out to me and I'll try me best to answer your questions.                </Title>
                <div>
                  {" "}
            
                </div>{" "}
              </Col>
            </Row>
          </div>
          <div style={{ width: "100%", margin: "0 auto" }}>
            <Row>

              <Col xl={12} lg={12} sm={24} xs={24}>
                <Title level={1} style={{ marginLeft:'1px',marginTop:'100px'}}>
                Contact form              </Title>
                <Title level={3} style={{  marginLeft:'1px'}}>
                The following form demonstrates form validation in action. Contact form component reduces the amount of time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any unnecessary performance penalty.                </Title>
                <div>
                  {" "}
            
                </div>{" "}
              </Col>
0
              {/* <Col lg={12} sm={24} xl={12} xs={24}>
           
      <Card style={{ width: 500 }}>
       
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              type="password"
              placeholder="Password"
            />
           
          </Form.Item>
    
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Log in
            </Button>
          
          </Form.Item>
        </Form>
      </Card>
                </Col> */}
            </Row>
          </div>
        </div>
      </Layout.Content>
      <Layout.Footer style={footerStyle}>
      <div style={{ width: "80%", margin: "0 auto" }}>
            <Row>
              <Col xl={8} lg={8} sm={8} xs={8}>
                <div style={{ width: "100%", margin: "0 auto" }}>
                    <Title level={3} style={{ marginRight:'100px'}}>Contact</Title>
                    <p style={{ marginRight:'280px'}}>Tell Us Everything</p>

                    <p style={{ marginRight:'280px'}}>Do you have any question? Feel free to reach out.</p>
                    <p  style={{ marginRight:'280px'}}>2131 Elk Street</p>
                    <div className="text" style={{ marginRight:'150px'}}></div>
                </div>
                </Col>
                <Col xl={8} lg={8} sm={8} xs={8}>
                <div style={{ width: "100%", margin: "0 auto" }}>
                    <Title level={2} style={{ marginRight:'320px'}}>Policy</Title>
                    <p style={{ marginRight:'280px'}}>Application Security</p>

                    <p  style={{ marginRight:'280px'}}>Software Principles</p>
                    <div className="text" style={{ marginRight:'150px'}}></div>
                </div>
                </Col>
                </Row></div>
      </Layout.Footer>
    </Layout>
  );
};

export default Landingpage;
