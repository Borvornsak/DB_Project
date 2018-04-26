import React from "react";
import { Table, Input, Button, Popconfirm } from "antd";

// class EditableCell extends React.Component {
//   state = {
//     value: this.props.value
//   };
//   handleChange = e => {
//     const value = e.target.value;
//     this.setState({ value });
//     if (this.props.onChange) {
//       this.props.onChange(value);
//     }
//   };
//   render() {
//     const { value } = this.state;
//     return <Input value={value} onChange={this.handleChange} />;
//   }
// }

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

  handleButtonSubmit = () => {
    const { dataSource } = this.state;
    const filterItems = dataSource.filter(
      item => item.courseId && item.sectionNumber
    );
    console.log(filterItems);
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
    const columns = this.columns;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div style={{ width: "80%" }}>
          <Button style={{ marginBottom: "8px" }} onClick={this.handleAdd}>
            Add
          </Button>
          <Table
            bordered
            dataSource={dataSource}
            columns={columns}
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

export default AddDropWithdrawBorad;
