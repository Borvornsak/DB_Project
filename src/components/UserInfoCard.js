import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //   position: absolute;
  margin: 3vh 0px;
`;

const Card = styled.div`
  border-radius: 5px;
  background: #364353;
  color: white;
  width: 90%;
  padding: 20px 20px;
`;

const UserInfoCard = ({ firstName, lastName }) => {
  return (
    <Container>
      <Card>
        <h1 style={{ color: "white" }}>User Info</h1>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
      </Card>
    </Container>
  );
};

const mapStateToProps = state => {
  const { firstName, lastName } = state.authentication;
  return { firstName, lastName };
};

export default connect(mapStateToProps)(UserInfoCard);
