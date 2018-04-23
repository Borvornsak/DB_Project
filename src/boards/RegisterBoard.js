import React from "react";
import { Table, Input, Popconfirm } from "antd";

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i.toString(),
    courseId: " ",
    section: " ",
    editable: true,
    status: ""
  });
}

const InputCell = ({ editable, value, onChange }) => (
  <div>
    {editable ? (
      <Input
        style={{ margin: "-5px 0" }}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    ) : (
      value
    )}
  </div>
);

class RegisterBoard extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Course Id",
        dataIndex: "courseId",
        width: "45%",
        render: (text, record) => this.renderColumns(text, record, "courseId")
      },
      {
        title: "Section",
        dataIndex: "section",
        width: "15%",
        render: (text, record) => this.renderColumns(text, record, "section")
      },
      {
        title: "operation",
        dataIndex: "operation",
        width: "25%",
        render: (text, record) => {
          const { editable } = record;
          return (
            <div>
              {editable ? (
                <span>
                  <a
                    style={{ marginRight: "8px" }}
                    onClick={() => this.save(record.key)}
                  >
                    Save
                  </a>
                  <Popconfirm
                    title="Sure to cancel?"
                    onConfirm={() => this.cancel(record.key)}
                  >
                    <a>Cancel</a>
                  </Popconfirm>
                </span>
              ) : (
                <a onClick={() => this.edit(record.key)}>Edit</a>
              )}
            </div>
          );
        }
      },
      {
        title: "Status",
        dataIndex: "status",
        width: "15%"
      }
    ];
    this.state = { data };
    this.cacheData = data.map(item => ({ ...item }));
  }
  renderColumns(text, record, column) {
    return (
      <InputCell
        editable={record.editable}
        value={text}
        onChange={value => this.handleChange(value, record.key, column)}
      />
    );
  }
  handleChange(value, key, column) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      target[column] = value;
      this.setState({ data: newData });
    }
  }
  edit(key) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      target.editable = true;
      this.setState({ data: newData });
    }
  }
  save(key) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      delete target.editable;
      this.setState({ data: newData });
      this.cacheData = newData.map(item => ({ ...item }));
    }
  }
  cancel(key) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
      delete target.editable;
      this.setState({ data: newData });
    }
  }
  render() {
    return (
      <div>
        <Table
          bordered
          dataSource={this.state.data}
          columns={this.columns}
          pagination={false}
        />
      </div>
    );
  }
}

export default RegisterBoard;
