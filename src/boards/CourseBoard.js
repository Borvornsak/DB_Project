import React from "react";
import { Select, Button, Table, Modal } from "antd";
import { connect } from "react-redux";
import { studentActions } from "../actions";
import { studentConstants } from "../constants";
import { SectionInfo } from "../components";

const Option = Select.Option;

class CourseBoard extends React.Component {
  constructor() {
    super();
    this.state = { year: "2017", semester: "1", courseName: "" };
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({ type: studentConstants.COURSE_CLEAR });
  }

  handleYearChange = value => {
    this.setState({ year: value });
  };
  handleSemesterChange = value => {
    this.setState({ semester: value });
  };
  handleButtonSubmit = () => {
    const { year, semester } = this.state;
    const { dispatch } = this.props;
    dispatch(studentActions.getAvailCourse(year, semester));
  };

  showModal = (courseId, courseName) => {
    this.setState({
      courseName,
      visible: true
    });
    const { dispatch } = this.props;
    dispatch(
      studentActions.getCourseSection(
        courseId,
        this.state.year,
        this.state.semester
      )
    );
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const { course } = this.props;

    return (
      <div>
        <Select
          defaultValue="2017"
          style={{ width: 120 }}
          onChange={this.handleYearChange}
        >
          <Option value="2017">2017</Option>
          <Option value="2016">2016</Option>
          <Option value="2015">2015</Option>
        </Select>
        <Select
          defaultValue="1"
          style={{ width: 120 }}
          onChange={this.handleSemesterChange}
        >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
        </Select>
        <Button type="primary" onClick={this.handleButtonSubmit}>
          Search
        </Button>
        {course.courseList && (
          <div>
            <Table
              columns={courseColumn}
              dataSource={course.courseList}
              onRowClick={record => {
                return {
                  onClick: this.showModal(record.courseId, record.courseName)
                };
              }}
            />
            <Modal
              title={this.state.courseName}
              visible={this.state.visible}
              footer={null}
              onCancel={this.handleCancel}
            >
              <SectionInfo
                courseId={this.state.courseId}
                year={this.state.year}
                semester={this.state.semester}
              />
            </Modal>
          </div>
        )}
      </div>
    );
  }
}

const courseColumn = [
  {
    title: "Course Id",
    dataIndex: "courseId",
    key: "courseId"
  },
  {
    title: "Course Name",
    dataIndex: "courseName",
    key: "courseName"
  },
  {
    title: "Short Name",
    dataIndex: "shortName",
    key: "shortName"
  },
  {
    title: "Credit",
    dataIndex: "credit",
    key: "credit"
  }
];

const mapStateToProps = state => {
  const { course } = state;
  return { course };
};

export default connect(mapStateToProps)(CourseBoard);
