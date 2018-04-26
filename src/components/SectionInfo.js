import React from "react";
import { connect } from "react-redux";
import { Table } from "antd";

class Sectioninfo extends React.Component {
  render() {
    const { section } = this.props;
    return (
      <Table
        style={{ whiteSpace: "pre" }}
        columns={courseColumn}
        dataSource={section.sectionList}
        pagination={false}
      />
    );
  }
}

const courseColumn = [
  {
    title: "Section",
    dataIndex: "sectionNumber",
    key: "sectionNumber"
  },
  {
    title: "Teacher",
    dataIndex: "teacher",
    key: "teacher"
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time"
  },
  {
    title: "Enrollment",
    dataIndex: "enrolled",
    key: "enrolled"
  }
];

const mapStateToProps = state => {
  const { section } = state;
  return { section };
};

export default connect(mapStateToProps)(Sectioninfo);
