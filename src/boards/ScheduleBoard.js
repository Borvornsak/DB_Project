import React from "react";
import { connect } from "react-redux";
import { Table } from "antd";

const ScheduleBoard = props => {
  const title = (year, semester) => {
    const termName = ["", "ภาคการศึกษาต้น", "ภาคการศึกษาปลาย", "ภาคฤดูร้อน"];
    return () => (
      <h1 style={{ whiteSpace: "pre" }}>{`${
        termName[parseInt(semester, 4)]
      }         ปีการศึกษา ${year}`}</h1>
    );
  };
  const { year, semester } = props;
  return (
    <div>
      <Table
        columns={scheduleColumns}
        dataSource={[]}
        pagination={{ position: "None" }}
        title={title(year, semester)}
      />
    </div>
  );
};

const scheduleColumns = [
  {
    title: "Course ID",
    dataIndex: "courseId",
    key: "courseId"
  },
  {
    title: "Shortname",
    dataIndex: "shortName",
    key: "shortName"
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time"
  }
];

const mapStateToProps = state => {
  const { year, semester } = state.authentication;
  console.log(year, semester);
  return { year, semester };
};

export default connect(mapStateToProps)(ScheduleBoard);
