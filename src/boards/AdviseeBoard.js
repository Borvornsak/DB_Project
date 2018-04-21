import React from "react";
import { connect } from "react-redux";
import { Table } from "antd";
import { teacherActions } from "../actions";

class AdviseeBoard extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch, id } = this.props;
    dispatch(teacherActions.getAdvisee(id));
  }

  render() {
    const { advisee } = this.props;
    return <Table columns={columns} dataSource={advisee.adviseeList} />;
  }
}

const columns = [
  {
    title: "Student Id",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName"
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName"
  },
  {
    title: "GPAX",
    dataIndex: "GPAX",
    key: "GPAX"
  }
];

const mapStateToProps = state => {
  const { advisee } = state;
  const { id } = state.authentication;
  return { advisee, id };
};

export default connect(mapStateToProps)(AdviseeBoard);
