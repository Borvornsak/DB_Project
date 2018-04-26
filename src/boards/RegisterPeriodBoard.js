import React from "react";
import { connect } from "react-redux";
import { Switch } from "antd";
import styled from "styled-components";
import { officerActions } from "../actions";

const H1 = styled.h1`
  margin: 0px 0px;
`;

class RegisterPeriodBoard extends React.Component {
  constructor(props) {
    super(props);
    const { registrationStatus } = this.props;
    this.state = {
      registerDisabled:
        registrationStatus === "add/drop" || registrationStatus === "withdraw",
      addDropDisabled:
        registrationStatus === "register" || registrationStatus === "withdraw",
      withdrawDisabled:
        registrationStatus === "register" || registrationStatus === "add/drop",
      registerCheck: registrationStatus === "register",
      addDropCheck: registrationStatus === "add/drop",
      withdrawCheck: registrationStatus === "withdraw"
    };
  }

  noneSelected = {
    registerDisabled: false,
    addDropDisabled: false,
    withdrawDisabled: false
  };

  registerSelected = checked => {
    const { dispatch } = this.props;
    if (checked) {
      dispatch(officerActions.manageRegisterPeriod("register"));
      this.setState({
        addDropDisabled: true,
        withdrawDisabled: true,
        registerCheck: true
      });
    } else {
      dispatch(officerActions.manageRegisterPeriod("none"));
      this.setState({
        ...this.noneSelected,
        registerCheck: false
      });
    }
  };

  addDropSelected = checked => {
    const { dispatch } = this.props;
    if (checked) {
      dispatch(officerActions.manageRegisterPeriod("add/drop"));
      this.setState({
        registerDisabled: true,
        withdrawDisabled: true,
        addDropCheck: true
      });
    } else {
      dispatch(officerActions.manageRegisterPeriod("none"));
      this.setState({
        ...this.noneSelected,
        addDropCheck: false
      });
    }
  };

  withdrawSelected = checked => {
    const { dispatch } = this.props;
    if (checked) {
      dispatch(officerActions.manageRegisterPeriod("withdraw"));
      this.setState({
        registerDisabled: true,
        addDropDisabled: true,
        withdrawCheck: true
      });
    } else {
      dispatch(officerActions.manageRegisterPeriod("none"));
      this.setState({
        ...this.noneSelected,
        withdrawCheck: false
      });
    }
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center",
          margin: "30px 20px"
        }}
      >
        <H1>Register : </H1>
        <Switch
          checked={this.state.registerCheck}
          onChange={this.registerSelected}
          disabled={this.state.registerDisabled}
        />
        <H1>Add/Drop : </H1>
        <Switch
          checked={this.state.addDropCheck}
          onChange={this.addDropSelected}
          disabled={this.state.addDropDisabled}
        />
        <H1>Withdraw : </H1>
        <Switch
          checked={this.state.withdrawCheck}
          onChange={this.withdrawSelected}
          disabled={this.state.withdrawDisabled}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { registrationStatus } = state.authentication;
  const { registerPeriod } = state;
  return { registerPeriod, registrationStatus };
};

export default connect(mapStateToProps)(RegisterPeriodBoard);
