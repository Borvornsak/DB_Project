import React from "react";
import { Select, Table, Button } from "antd";
import { connect } from "react-redux";

const Option = Select.Option;

class DocumentBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDoc: ""
    };
  }

  handleChange = value => {
    this.setState({ selectedDoc: value });
  };

  handleRequest = () => {
    console.log(this.state.selectedDoc);
  };

  render() {
    const { docList, requestList } = this.props;
    return (
      <div>
        <Select
          // defaultValue="lucy"
          style={{ width: 300 }}
          onChange={this.handleChange}
        >
          {docList &&
            docList.map((item, key) => (
              <Option key={key} value={item.documentId}>
                {item.documentId} - {item.documentName}
              </Option>
            ))}
        </Select>
        <Button
          type="primary"
          onClick={this.handleRequest}
          disabled={!this.state.selectedDoc}
        >
          Request
        </Button>
        <Table
          columns={requestColumns}
          dataSource={requestList ? requestList : []}
        />
      </div>
    );
  }
}

const requestColumns = [
  {
    title: "Document ID",
    dataIndex: "documentId",
    key: "documentId"
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status"
  }
];

const mapStateToProps = state => {
  const { docList, requestList } = state.document;
  return { docList, requestList };
};

export default connect(mapStateToProps)(DocumentBoard);
