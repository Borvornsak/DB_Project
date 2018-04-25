import React from "react";
import { Table, Input, Button } from "antd";
import { connect } from "react-redux";
import { studentActions } from "../actions";

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i.toString(),
    courseId: "",
    sectionNumber: "",
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
    this.unregisteredColumns = [
      {
        title: "Course Id",
        dataIndex: "courseId",
        width: "45%",
        render: (text, record) => this.renderColumns(text, record, "courseId")
      },
      {
        title: "Section",
        dataIndex: "sectionNumber",
        width: "15%",
        render: (text, record) =>
          this.renderColumns(text, record, "sectionNumber")
      },
      {
        title: "Status",
        dataIndex: "status",
        width: "15%"
      }
    ];
    this.registeredColumns = [
      {
        title: "Course Id",
        dataIndex: "courseId",
        width: "20%",
        render: (text, record) => this.renderColumns(text, record, "courseId")
      },
      {
        title: "Course Name",
        dataIndex: "courseName",
        width: "30%",
        render: (text, record) => this.renderColumns(text, record, "courseName")
      },
      {
        title: "Section",
        dataIndex: "sectionNumber",
        width: "15%",
        render: (text, record) =>
          this.renderColumns(text, record, "sectionNumber")
      },
      {
        title: "Credit",
        dataIndex: "credit",
        width: "15%",
        render: (text, record) => this.renderColumns(text, record, "credit")
      },
      {
        title: "Status",
        dataIndex: "status",
        width: "20%"
      }
    ];
    const { registerResult } = this.props.register;
    this.state = registerResult.success
      ? { data: registerResult.detail }
      : { data };
    this.cacheData = registerResult.success
      ? registerResult.detail.map(item => ({ ...item }))
      : data.map(item => ({ ...item }));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.register.registerResult.detail.length > 0) {
      if (nextProps.register.registerResult.success) {
        this.setState({ data: nextProps.register.registerResult.detail });
      } else {
        const newData = [...this.state.data];
        for (
          let i = 0;
          i < nextProps.register.registerResult.detail.length;
          i++
        ) {
          newData[i].status =
            nextProps.register.registerResult.detail[i].status;
        }
        this.setState({ data: newData });
      }
    }
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
    const newData = [...this.state.data];
    console.log(newData);
    const register = newData
      .filter(item => item.courseId && item.sectionNumber)
      .map(item => {
        return { courseId: item.courseId, section: item.sectionNumber };
      });
    console.log(register);
    const { dispatch, id } = this.props;
    dispatch(studentActions.registerCourse(id, register));
  };
  handleButtonReset = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        key: i.toString(),
        courseId: "",
        sectionNumber: "",
        editable: true,
        status: ""
      });
    }
    this.setState({ data });
  };
  render() {
    const { registerResult } = this.props.register;
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Table
            bordered
            dataSource={this.state.data}
            columns={
              registerResult.success
                ? this.registeredColumns
                : this.unregisteredColumns
            }
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
          {!registerResult.success && (
            <div>
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
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { register } = state;
  const { id } = state.authentication;
  return { register, id };
};

export default connect(mapStateToProps)(RegisterBoard);
