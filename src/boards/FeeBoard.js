import React from "react";
import { connect } from "react-redux";
import { Table } from "antd";

const FeeBoard = props => {
  const { paymentList } = props;
  const title = (year, semester) => {
    const termName = ["", "ภาคการศึกษาต้น", "ภาคการศึกษาปลาย", "ภาคฤดูร้อน"];
    return () => (
      <h1 style={{ whiteSpace: "pre" }}>{`${
        termName[parseInt(semester, 4)]
      }         ปีการศึกษา ${year}`}</h1>
    );
  };
  return (
    <div>
      {paymentList &&
        paymentList.map((payment, key) => {
          return (
            <div key={payment.key} style={{ margin: "0 0 50px 0" }}>
              <Table
                columns={paymentColumns}
                dataSource={[payment]}
                pagination={{ position: "None" }}
                title={title(payment.year, payment.semester)}
              />
            </div>
          );
        })}
    </div>
  );
};

const paymentColumns = [
  { title: "Student ID", dataIndex: "sId", key: "sId" },
  { title: "Payment Status", dataIndex: "paymentStatus", key: "paymentStatus" }
];

const mapStateToProps = state => {
  const { paymentList } = state.payment;
  return { paymentList };
};
export default connect(mapStateToProps)(FeeBoard);
