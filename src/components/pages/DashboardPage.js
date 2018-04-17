import React, { Component } from "react";
import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
import MenuInSider from "../MenuInSider";
import UserInfoCard from "../UserInfoCard";
import "antd/dist/antd.css";

const { Header, Content, Footer, Sider } = Layout;

class DashboardPage extends Component {
  render() {
    return (
      <Layout className="layout" style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <UserInfoCard />
          <MenuInSider />
          <Link
            to="/"
            style={{
              width: "100%",
              position: "absolute",
              bottom: "5vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Button type="danger" size="large">
              LOGOUT
            </Button>
          </Link>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default DashboardPage;
