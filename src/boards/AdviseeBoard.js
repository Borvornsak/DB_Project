import React from "react";
import { connect } from "react-redux";
import { Table, Modal } from "antd";
import { studentActions } from "../actions";
import { GradeBoard } from "../boards";

class AdviseeBoard extends React.Component {
  constructor() {
    super();
    this.state = { firstName: "", lastName: "" };
  }
  showModal = (studentId, firstName, lastName) => {
    this.setState({
      firstName,
      lastName,
      visible: true
    });
    const { dispatch } = this.props;
    dispatch(studentActions.getGrade(studentId));
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const { advisee } = this.props;
    return (
      <div>
        <Table
          columns={columns}
          dataSource={advisee.adviseeList}
          onRowClick={record => {
            console.log(record);
            const { id, firstName, lastName } = record;
            return {
              onClick: this.showModal(id, firstName, lastName)
            };
          }}
        />{" "}
        <Modal
          title={`${this.state.firstName} ${this.state.lastName}`}
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
          width={800}
        >
          <GradeBoard />
        </Modal>
      </div>
    );
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
  return { advisee };
};

export default connect(mapStateToProps)(AdviseeBoard);
