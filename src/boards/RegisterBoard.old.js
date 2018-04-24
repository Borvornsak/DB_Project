import React from "react";
import { Table, Input, Popconfirm, Button } from "antd";
import { connect } from "react-redux";

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
                <span>
                  <a
                    style={{ marginRight: "8px" }}
                    onClick={() => this.edit(record.key)}
                  >
                    Edit
                  </a>
                  <Popconfirm
                    title="Sure to delete?"
                    onConfirm={() => this.delete(record.key)}
                  >
                    <a>Delete</a>
                  </Popconfirm>
                </span>
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
    const { registerList } = this.props.register;
    registerList ? console.log("register") : console.log("data");
    this.state = registerList ? { registerList } : { data };
    this.cacheData = registerList
      ? registerList.map(item => ({ ...item }))
      : data.map(item => ({ ...item }));
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
  delete = key => {
    const newData = [...this.state.data];
    this.setState({ data: newData.filter(item => item.key !== key) });
  };
  handleButtonSubmit = () => {
    // for (let i = 0; i < 10; i++) {}
    console.log(this.state.data);
  };
  handleButtonReset = () => {
    const { registerList } = this.props.register;
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
    this.setState({ data: registerList ? registerList : data });
  };
  render() {
    return (
      <div>
        <Table
          bordered
          dataSource={this.state.data}
          columns={this.columns}
          pagination={false}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 20px"
          }}
        >
          <Button
            type="primary"
            onClick={this.handleButtonSubmit}
            style={{ margin: "0px 30px" }}
          >
            Register
          </Button>
          <Button type="danger" onClick={this.handleButtonReset}>
            Reset
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { register } = state;
  return { register };
};

export default connect(mapStateToProps)(RegisterBoard);
