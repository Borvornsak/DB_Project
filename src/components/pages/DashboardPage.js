import React, { Component } from "react";
import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuInSider from "../MenuInSider";
import UserInfoCard from "../UserInfoCard";

const { Content, Sider } = Layout;

const WrappedDiv = styled.div`
width: 100%;
position: absolute;
bottom: 2vh;
display: flex,
alig-items: center;
justify-content: center;
`;

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
          width="250"
        >
          <UserInfoCard />
          <MenuInSider />
          <WrappedDiv>
            <Link to="/">
              <Button type="danger" size="large">
                Logout
              </Button>
            </Link>
          </WrappedDiv>
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px", height: "100%" }}>
            <div
              style={{
                padding: 24,
                background: "#fff",
                height: "100%",
                minHeight: 360
              }}
            >
              content
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DashboardPage;
