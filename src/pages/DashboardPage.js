import React from "react";
import { Layout, Button, Modal } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuInSider, UserInfoCard, UserInfo } from "../components";
import { MenuRoutes } from "../routes";

const { Content, Sider } = Layout;

const WrappedDiv = styled.div`
width: 100%;
// position: absolute;
margin: 2vh 0 1vh;
display: flex,
alig-items: center;
justify-content: center;
`;

class DashboardPage extends React.Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <Layout className="layout" style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => {
            //console.log(collapsed, type);
          }}
          width="250"
        >
          <UserInfoCard onClick={this.showModal} />
          <Modal
            title="ข้อมูลส่วนตัว"
            visible={this.state.visible}
            footer={null}
            onCancel={this.handleCancel}
          >
            <UserInfo />
          </Modal>
          <MenuInSider />
          <WrappedDiv>
            <Link to="/">
              <Button type="danger" size="large">
                Logout
              </Button>
            </Link>
          </WrappedDiv>
        </Sider>
        <Layout style={{ minHeight: "100vh" }}>
          <Content style={{ margin: "24px 16px", height: "100%" }}>
            <div
              style={{
                padding: 24,
                background: "#fff",
                minHeight: "100%"
              }}
            >
              <MenuRoutes />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DashboardPage;
