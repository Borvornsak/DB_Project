import React from "react";
import { Table, Input, Button } from "antd";
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
        title: "Status",
        dataIndex: "status",
        width: "15%"
      }
    ];
    const { registerResultList } = this.props.registerResult;
    registerResultList ? console.log("register") : console.log("data");
    this.state = registerResultList ? { registerResultList } : { data };
    this.cacheData = registerResultList
      ? registerResultList.map(item => ({ ...item }))
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
  delete = key => {
    const newData = [...this.state.data];
    this.setState({ data: newData.filter(item => item.key !== key) });
  };
  handleButtonSubmit = () => {
    // for (let i = 0; i < 10; i++) {}
    console.log(this.state.data);
  };
  handleButtonReset = () => {
    const { registerResultList } = this.props.registerResult;
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
    this.setState({ data: registerResultList ? registerResultList : data });
  };
  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Table
            bordered
            dataSource={this.state.data}
            columns={this.columns}
            pagination={false}
            style={{ width: "80%" }}
          />
        </div>
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
  const { registerResult } = state;
  return { registerResult };
};

export default connect(mapStateToProps)(RegisterBoard);
