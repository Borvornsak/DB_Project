import React from "react";
import { connect } from "react-redux";
import { studentActions } from "../actions";

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
            <p>
              <b>รหัสประจำตัว: </b>
              {info.id}
            </p>
            <p>
              <b>หมายเลขบัตรประชาชน: </b>
              {info.ssn}
            </p>
            <p>
              <b>ชื่อ: </b>
              {info.firstName}
            </p>
            <p>
              <b>นามสกุล: </b>
              {info.lastName}
            </p>
            <p>
              <b>เบอร์โทรศัพท์: </b>
              {info.tel}
            </p>
            <p>
              <b>อีเมล์: </b>
              {info.email}
            </p>
            {info.address && (
              <p>
                <b>ที่อยู่: </b>
                บ้านเลขที่ {info.address.houseNo} ถนน {info.address.road} แขวง{" "}
                {info.address.subDistrict} เขต {info.address.district} จังหวัด{" "}
                {info.address.province} รหัสไปรษณีย์ {info.address.zipCode}
              </p>
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
