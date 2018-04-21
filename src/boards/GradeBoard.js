import React from "react";
import { connect } from "react-redux";
import { Table } from "antd";

class GradeBoard extends React.Component {
  title = semester => {
    const termName = ["", "ภาคการศึกษาต้น", "ภาคการศึกษาปลาย", "ภาคฤดูร้อน"];
    let [year, term] = semester.split("/");
    return () => (
      <h1 style={{ whiteSpace: "pre" }}>{`${
        termName[parseInt(term, 4)]
      }         ปีการศึกษา ${year}`}</h1>
    );
  };
  render() {
    const { grade } = this.props;
    return (
      <div>
        {grade.semesterList &&
          grade.semesterList.map((semester, key) => {
            return (
              <div key={semester} style={{ margin: "0 0 50px 0" }}>
                <Table
                  columns={courseColumns}
                  dataSource={grade[semester].courseList}
                  pagination={{ position: "None" }}
                  title={this.title(semester)}
                />
                <Table
                  columns={statColumns}
                  dataSource={[grade[semester].stat]}
                  pagination={{ position: "None" }}
                />
              </div>
            );
          })}
      </div>
    );
  }
}

const courseColumns = [
  {
    title: "Course Id",
    dataIndex: "courseId",
    key: "courseId",
    width: "25%"
  },
  {
    title: "Course Name",
    dataIndex: "courseName",
    key: "courseName",
    width: "25%"
  },
  {
    title: "Credit",
    dataIndex: "credit",
    key: "credit",
    width: "25%"
  },
  {
    title: "Grade",
    dataIndex: "grade",
    key: "grade",
    width: "25%"
  }
];
const statColumns = [
  {
    title: "CA",
    dataIndex: "ca",
    key: "ca",
    width: "25%"
  },
  {
    title: "GPA",
    dataIndex: "gpa",
    key: "gpa",
    width: "25%"
  },
  {
    title: "CAX",
    dataIndex: "cax",
    key: "cax",
    width: "25%"
  },
  {
    title: "GPAX",
    dataIndex: "gpax",
    key: "gpax",
    width: "25%"
  }
];

const mapStateToProps = state => {
  const { grade } = state;
  return { grade };
};

export default connect(mapStateToProps)(GradeBoard);
