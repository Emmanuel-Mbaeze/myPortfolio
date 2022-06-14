import React from "react";
import Card from "./Card";
import styled from "styled-components";
import Header from "../Header/Header";
const Works = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          {/* <Card title="ReactJS" />
          <Card title="NodeJS" />
          <Card title="MongoDB" />
          <Card title="Figma" />
          <Card title="Data Structure" message="good" />
          {/* <One></One>
        <One></One>
        <One></One> */}{" "}
        </Wrapper>
      </Container>
    </>
  );
};

export default Works;

const One = styled.div`
  width: 200px;
  min-height: 180px;
  border-radius: 6px;
  margin: 20px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;
const Wrapper = styled.div`
  width: 70%;
  min-height: 80vh;
  /* background-color: rgba(0, 0, 0, 0.1); */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
