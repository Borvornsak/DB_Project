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
    this.state = {
      registerDisabled: false,
      addDropDisabled: false,
      withdrawDisabled: false
    };
  }

  noneSelected = () => {
    this.setState({
      registerDisabled: false,
      addDropDisabled: false,
      withdrawDisabled: false
    });
  };

  registerSelected = checked => {
    const { dispatch } = this.props;
    if (checked) {
      dispatch(officerActions.manageRegisterPeriod("open"));
      this.setState({
        addDropDisabled: true,
        withdrawDisabled: true
      });
    } else {
      dispatch(officerActions.manageRegisterPeriod("close"));
      this.noneSelected();
    }
  };

  addDropSelected = checked => {
    if (checked) {
      this.setState({
        registerDisabled: true,
        withdrawDisabled: true
      });
    } else {
      this.noneSelected();
    }
  };

  withdrawSelected = checked => {
    if (checked) {
      this.setState({
        registerDisabled: true,
        addDropDisabled: true
      });
    } else {
      this.noneSelected();
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
          onChange={this.registerSelected}
          disabled={this.state.registerDisabled}
        />
        <H1>Add/Drop : </H1>
        <Switch
          onChange={this.addDropSelected}
          disabled={this.state.addDropDisabled}
        />
        <H1>Withdraw : </H1>
        <Switch
          onChange={this.withdrawSelected}
          disabled={this.state.withdrawDisabled}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { registerPeriod } = state;
  return { registerPeriod };
};

export default connect(mapStateToProps)(RegisterPeriodBoard);
