import React from "react";
import styled from "styled-components";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import history from "../history";
const FormItem = Form.Item;

const Container = styled.div`
  border-radius: 5px;
  width: 30vw;
  height: 40vh;
  padding: 40px 40px;
  background: white;
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
  margin-top: -20vh;
  margin-left: -15vw;
`;

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        history.push("/dashboard");
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Container>
        <Form
          onSubmit={this.handleSubmit}
          className="login-form"
          style={{
            width: "100%"
          }}
        >
          <h1 style={{ textAlign: "center" }}>Log In</h1>
          <FormItem>
            {getFieldDecorator("userName", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
          >
            Log in
          </Button>
        </Form>
      </Container>
    );
  }
}

const LoginForm = Form.create()(NormalLoginForm);

export default LoginForm;
