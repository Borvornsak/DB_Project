import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
import LoginForm from "../LoginForm";
const { Content } = Layout;

const LoginPage = () => (
  <Layout className="layout" style={{ height: "100vh" }}>
    <Content style={{ background: "#041428" }}>
      <Content>
        <LoginForm />
      </Content>
    </Content>
  </Layout>
);

export default LoginPage;
