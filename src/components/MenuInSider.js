import React from "react";
import { Menu, Icon } from "antd";
import { connect } from "react-redux";
import { history } from "../helpers";
import { studentActions, teacherActions } from "../actions";

const { SubMenu } = Menu;

const studentFeatures = [
  "",
  "/register",
  "/addDropWithdraw",
  "/timetable",
  "/grade",
  "/transcript",
  "/graduate",
  "/fee",
  "/course"
];

const teacherFeatures = ["", "/studentScore", "/advisee"];

const officerFeatures = ["", "/request", "/registerPeriod"];

class MenuInSider extends React.Component {
  studentDispatchByKey = key => {
    const { dispatch, state } = this.props;
    switch (key) {
      case "1":
        if (state.authentication.registerPeriod === "register") {
          dispatch(
            studentActions.getCoursePendingList(state.authentication.id)
          );
        } else {
          dispatch(studentActions.getRegisterResult(state.authentication.id));
        }
        break;
      case "2":
        break;
      case "3":
        break;
      case "4":
        dispatch(studentActions.getGrade(state.authentication.id));
        break;
      case "5":
        break;
      case "6":
        break;
      case "7":
        break;
      case "8":
        break;
      default:
    }
  };

  teacherDispatchByKey = key => {
    const { dispatch, state } = this.props;
    switch (key) {
      case "1":
        break;
      case "2":
        dispatch(teacherActions.getAdvisee(state.authentication.id));
        break;
      default:
    }
  };

  officerDispatchByKey = key => {
    switch (key) {
      case "1":
        break;
      case "2":
        break;
      default:
    }
  };

  handleSelected = features => e => {
    const { userType } = this.props.state.authentication;
    const head = "/dashboard";
    let path = head + features[parseInt(e.key, features.length)];
    history.push(path);
    if (userType === "Student") this.studentDispatchByKey(e.key);
    else if (userType === "Teacher") this.teacherDispatchByKey(e.key);
    else if (userType === "Officer") this.officerDispatchByKey(e.key);
  };
  render() {
    const { userType, registerPeriod } = this.props;
    return (
      <div>
        {userType === "Student" && (
          <Menu
            theme="dark"
            mode="inline"
            defaultOpenKeys={["sub1", "sub2", "sub3", "sub4"]}
            onSelect={this.handleSelected(studentFeatures)}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="solution" />การจัดการรายวิชา
                </span>
              }
            >
              <Menu.Item key="1">
                {registerPeriod === "register"
                  ? "ลงทะเบียนเรียน"
                  : "ผลการลงทะเบียนเรียน"}
              </Menu.Item>
              {registerPeriod === "add/drop" && (
                <Menu.Item key="2">เพิ่ม ลด ถอน รายวิชา</Menu.Item>
              )}
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
            onSelect={this.handleSelected(teacherFeatures)}
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
            onSelect={this.handleSelected(officerFeatures)}
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
              <Menu.Item key="2">ตั้งค่าการลงทะเบียนเรียน</Menu.Item>
            </SubMenu>
          </Menu>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { userType, registerPeriod } = state.authentication;
  return { userType, state, registerPeriod };
};

export default connect(mapStateToProps)(MenuInSider);
