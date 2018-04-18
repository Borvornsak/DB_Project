import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //   position: absolute;
  margin: 2vh 0px 0;
`;

const Card = styled.div`
  border-radius: 5px;
  background: #364353;
  color: white;
  width: 90%;
  padding: 10px 20px;
`;

const UserInfoCard = ({ firstName, lastName, onClick }) => {
  return (
    <Container>
      <Card onClick={onClick}>
        <h1 style={{ color: "white" }}>ข้อมูลส่วนตัว</h1>
        <p>ชื่อ: {firstName}</p>
        <p>นามสกุล: {lastName}</p>
      </Card>
    </Container>
  );
};

const mapStateToProps = state => {
  const { firstName, lastName } = state.authentication;
  return { firstName, lastName };
};

export default connect(mapStateToProps)(UserInfoCard);
