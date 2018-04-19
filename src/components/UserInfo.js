import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { studentActions } from "../actions";

const Pre = styled.p`
  white-space: pre;
`;

class Userinfo extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch, id } = this.props;
    dispatch(studentActions.getInfo(id));
  }

  render() {
    const { info, userType } = this.props;
    console.log(info);
    return (
      <div>
        {info && (
          <div>
            <Pre>
              <b>รหัสประจำตัว: </b>
              {info.id}
              {"\t"}
              <b>หมายเลขบัตรประชาชน: </b>
              {info.ssn}
            </Pre>
            <Pre>
              <b>ชื่อ: </b>
              {info.firstName}
              {"\t\t\t\t"}
              <b>นามสกุล: </b>
              {info.lastName}
            </Pre>
            <Pre>
              <b>เบอร์โทรศัพท์: </b>
              {info.tel}
              {"\t"}
              <b>อีเมล์: </b>
              {info.email}
            </Pre>
            {info.address && (
              <div>
                <p>
                  <b>ที่อยู่: </b>
                </p>
                <div style={{ textIndent: "20px" }}>
                  <Pre>
                    <b>บ้านเลขที่: </b>
                    {info.address.houseNo}
                    {"\t\t"}
                    <b>ถนน: </b>
                    {info.address.road}
                    {"\t\t"}
                    <b>แขวง: </b>
                    {info.address.subDistrict}
                  </Pre>
                  <Pre>
                    <b>เขต: </b>
                    {info.address.district}
                    {"\t\t"}
                    <b>จังหวัด: </b>
                    {info.address.province}
                    {"\t"}
                    <b>รหัสไปรษณีย์: </b>
                    {info.address.zipCode}
                  </Pre>
                  <p />
                  <p />
                </div>
              </div>
            )}

            {userType === "Student" && (
              <p>
                <b>คณะ: </b>
                {info.faculty}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { info } = state;
  const { id, userType } = state.authentication;
  return { info, id, userType };
};

export default connect(mapStateToProps)(Userinfo);
