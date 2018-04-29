import React from "react";
import { connect } from "react-redux";
import { Table, Popconfirm } from "antd";
import { officerActions } from "../actions";

class RequestBoard extends React.Component {
  constructor(props) {
    super(props);
    this.requestColumns = [
      {
        title: "Barcode",
        dataIndex: "barcode",
        key: "barcode "
      },
      {
        title: "Student ID",
        dataIndex: "sId",
        key: "sId "
      },
      {
        title: "Document ID",
        dataIndex: "documentId",
        key: "documentId "
      },
      {
        title: "Request Date",
        dataIndex: "requestDate",
        key: "requestDate "
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status "
      },
      {
        title: "Operation",
        key: "operation",
        render: (text, record) => {
          return record.status === "Pending" ? (
            <Popconfirm
              title="Sure to Approve?"
              onConfirm={() => this.onAppropve(record.barcode, record.status)}
            >
              <a>Approve</a>
            </Popconfirm>
          ) : record.status === "Processing" ? (
            <Popconfirm
              title="Sure to Finish?"
              onConfirm={() => this.onAppropve(record.barcode, record.status)}
            >
              <a>Finish</a>
            </Popconfirm>
          ) : null;
        }
      }
    ];
  }

  onAppropve = (barcode, status) => {
    const { dispatch } = this.props;
    dispatch(officerActions.submitRequest(barcode, status));
  };

  render() {
    const { requestList } = this.props;
    return (
      <div>
        <h1>คำร้องขอเอกสาร</h1>
        <Table
          columns={this.requestColumns}
          dataSource={requestList ? requestList : []}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { requestList } = state.request;
  return { requestList };
};

export default connect(mapStateToProps)(RequestBoard);
