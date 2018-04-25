import React from "react";
import { connect } from "react-redux";
import { Table } from "antd";

class Sectioninfo extends React.Component {
  render() {
    const { section } = this.props;
    return (
      <Table
        columns={courseColumn}
        dataSource={section.sectionList}
        pagination={false}
      />
    );
  }
}

const courseColumn = [
  {
    title: "Section Number",
    dataIndex: "sectionNumber",
    key: "sectionNumber"
  },
  {
    title: "Teacher",
    dataIndex: "Teacher",
    key: "Teacher"
  },
  {
    title: "Time",
    dataIndex: "Time",
    key: "Time"
  },
  {
    title: "Enroll Number",
    dataIndex: "enrollNumber",
    key: "enrollNumber"
  }
];

const mapStateToProps = state => {
  const { section } = state;
  return { section };
};

export default connect(mapStateToProps)(Sectioninfo);
