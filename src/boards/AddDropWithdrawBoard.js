import React from "react";
import { connect } from "react-redux";
import { Table, Input, Button, Popconfirm } from "antd";
import { studentActions } from "../actions";

class AddDropWithdrawBorad extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Course Id",
        dataIndex: "courseId",
        width: "50%",
        render: (text, record) => this.renderColumns(text, record, "courseId")
      },
      {
        title: "Section",
        dataIndex: "sectionNumber",
        render: (text, record) =>
          this.renderColumns(text, record, "sectionNumber")
      },
      {
        title: "operation",
        dataIndex: "operation",
        render: (text, record) => {
          return this.state.dataSource.length > 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.onDelete(record.key)}
            >
              <a>Delete</a>
            </Popconfirm>
          ) : null;
        }
      }
    ];

    this.registeredColumns = [
      {
        title: "Course Id",
        dataIndex: "courseId",
        width: "15%"
      },
      {
        title: "Course Name",
        dataIndex: "courseName",
        width: "25%"
      },
      {
        title: "Section",
        dataIndex: "sectionNumber",
        width: "15%"
      },
      {
        title: "Credit",
        dataIndex: "credit",
        width: "15%"
      },
      {
        title: "Status",
        dataIndex: "status",
        width: "15%"
      },
      {
        title: "Operation",
        width: "15%",
        render: (text, record) => (
          <Popconfirm
            title="Sure to drop?"
            onConfirm={() => this.handleDrop(record.courseId, record.section)}
          >
            <a>Drop</a>
          </Popconfirm>
        )
      }
    ];

    this.state = {
      dataSource: [
        {
          key: 0,
          courseId: "",
          sectionNumber: ""
        }
      ],
      count: 1
    };
  }
  renderColumns(text, record, column) {
    return (
      <Input
        value={text}
        onChange={e => this.onCellChange(e.target.value, record.key, column)}
      />
    );
  }
  onCellChange = (value, key, dataIndex) => {
    const dataSource = [...this.state.dataSource];
    const target = dataSource.find(item => item.key === key);
    if (target) {
      target[dataIndex] = value;
      this.setState({ dataSource });
    }
  };
  onDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      courseId: "",
      sectionNumber: ""
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1
    });
  };
  handleDrop = (courseId, section) => {
    const { dispatch, id } = this.props;
    dispatch(
      studentActions.addDropCourse(id, [{ courseId, section, option: "drop" }])
    );
  };

  handleButtonSubmit = () => {
    const { dataSource } = this.state;
    const filterItems = dataSource
      .filter(item => item.courseId && item.sectionNumber)
      .map(item => {
        return {
          courseId: item.courseId,
          section: item.sectionNumber,
          option: "add"
        };
      });
    console.log(filterItems);
    const { dispatch, id } = this.props;
    dispatch(studentActions.addDropCourse(id, filterItems));
  };

  handleButtonReset = () => {
    this.setState({
      dataSource: [
        {
          key: 0,
          courseId: "",
          sectionNumber: ""
        }
      ],
      count: 1
    });
  };

  render() {
    const { dataSource } = this.state;
    const { approveList } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Table
          bordered
          dataSource={approveList ? approveList : []}
          columns={this.registeredColumns}
          pagination={false}
          style={{ width: "80%" }}
        />
        <div style={{ width: "80%", marginTop: "50px" }}>
          <Button style={{ marginBottom: "8px" }} onClick={this.handleAdd}>
            Add
          </Button>
          <Table
            bordered
            dataSource={dataSource}
            columns={this.columns}
            pagination={false}
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
            Submit
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
  const { id } = state.authentication;
  const { approveList } = state.approve;
  return { id, approveList };
};

export default connect(mapStateToProps)(AddDropWithdrawBorad);
