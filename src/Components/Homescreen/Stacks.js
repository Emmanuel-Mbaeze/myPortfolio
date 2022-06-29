import React from "react";
import Card from "./Card";
import styled from "styled-components";
import Header from "../Header/Header";
const Stacks = () => {
  return (
    <Container>
      <Wrapper>
        <Card
          pic="
          /logo512.png
          "
          title="ReactJS"
        />
        <Card
          pic="
          /nodelogo.png
          "
          title="NodeJS"
        />
        <Card
          pic="
          /mongodb.png
          "
          title="MongoDB"
        />
        <Card
          pic="
          /Figma-logo.png
          "
          title="Figma"
        />
        <Card
          pic="
          /firebase.png
          "
          title="FireBase"
        />
        <Card
          pic="
          /query.svg
          "
          title="React Query"
        />
        <Card
          pic="
          /reactredux.jpg
          "
          title="React Redux"
        />
        <Card
          pic="
          /algo.png
          "
          title="Data Structure"
          message="good"
        />
        <Card
          pic="
          /azure.png
          "
          title="Azure"
          message="good"
        />
        {/* <One></One>
        <One></One>
        <One></One> */}
      </Wrapper>
    </Container>
  );
};

export default Stacks;

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
  width: 80%;
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
  padding-top: 70px;

  justify-content: center;
  @media (max-width: 800px) {
    padding-top: 70px;
  }
  /* margin-top: 20px; */
`;
