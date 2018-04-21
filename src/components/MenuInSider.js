import React from "react";
import { Menu, Icon } from "antd";
import { connect } from "react-redux";
import { history } from "../helpers";

const { SubMenu } = Menu;

class MenuInSider extends React.Component {
  handleStudentSelected = e => {
    const head = "/dashboard";
    const features = [
      "",
      "/register",
      "/configure",
      "/timetable",
      "/grade",
      "/transcript",
      "/graduate",
      "/fee",
      "/course"
    ];
    let path = head + features[parseInt(e.key, features.length)];
    history.push(path);
  };
  render() {
    const { userType } = this.props;
    return (
      <div>
        {userType === "Student" && (
          <Menu
            theme="dark"
            mode="inline"
            defaultOpenKeys={["sub1", "sub2", "sub3", "sub4"]}
            onSelect={this.handleStudentSelected}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="solution" />การจัดการรายวิชา
                </span>
              }
            >
              <Menu.Item key="1">ลงทะเบียนเรียน</Menu.Item>
              <Menu.Item key="2">เพิ่ม ลด ถอน รายวิชา</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="user" />ข้อมูลผู้ใช้
                </span>
              }
            >
              <Menu.Item key="3">ตรวจสอบตารางเรียน</Menu.Item>
              <Menu.Item key="4">ตรวจสอบผลการศึกษา</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="file-text" />การจัดการเอกสาร
                </span>
              }
            >
              <Menu.Item key="5">ยื่นคำร้องขอใบ Transcript</Menu.Item>
              <Menu.Item key="6">ยื่นคำร้องขอจบการศึกษา</Menu.Item>
              <Menu.Item key="7">พิมพ์ใบชำระค่าเล่าเรียน</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="notification" />ข้อมูลทั่วไป
                </span>
              }
            >
              <Menu.Item key="8">ตรวจสอบวิชาเรียน</Menu.Item>
            </SubMenu>
          </Menu>
        )}

        {userType === "Teacher" && (
          <Menu
            theme="dark"
            mode="inline"
            defaultOpenKeys={["sub1"]}
            style={{ margin: "50px 0" }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="profile" />การจัดการข้อมูลนิสิต
                </span>
              }
            >
              <Menu.Item key="1">บันทึกผลการเรียนนิสิต</Menu.Item>
              <Menu.Item key="2" style={{ height: "60px", lineHeight: "2em" }}>
                ติดตามผลการเรียนของ<br />นิสิตในที่ปรึกษา
              </Menu.Item>
            </SubMenu>
          </Menu>
        )}

        {userType === "Officer" && (
          <Menu
            theme="dark"
            mode="inline"
            defaultOpenKeys={["sub1"]}
            style={{ margin: "50px 0" }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="profile" />การจัดการข้อมูลนิสิต
                </span>
              }
            >
              <Menu.Item key="1">รับคำร้องจากนิสิต</Menu.Item>
            </SubMenu>
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
