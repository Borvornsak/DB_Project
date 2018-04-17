import React from "react";
import { Menu, Icon } from "antd";
import { connect } from "react-redux";

const { SubMenu } = Menu;

class MenuInSider extends React.Component {
  render() {
    const { userType } = this.props;
    return (
      <div>
        {userType === "student" && (
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />subnav 1
                </span>
              }
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />subnav 2
                </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />subnav 3
                </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        )}

        {userType === "teacher" && (
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
          </Menu>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { userType } = state.authentication;
  return { userType };
};

export default connect(mapStateToProps)(MenuInSider);
