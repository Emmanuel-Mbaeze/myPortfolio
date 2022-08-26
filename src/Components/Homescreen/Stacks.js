import React from "react";
import Card from "./Card";
import styled from "styled-components";
import Header from "../Header/Header";
// import "../../App.css";

const Stacks = () => {
  const reveal = () => {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };
  window.addEventListener("scroll", reveal);

  return (
    <Container className="reveal">
      <h2>Stacks</h2>
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
          /algo.png
          "
          title="Data Structure"
          message="good"
        />
        <Card
          pic="
          /logo512.png
          "
          title="ReactJS"
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

const Wrapper = styled.div`
  width: 90%;
  min-height: 70vh;
  /* background-color: red; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: blue;

  background-color: rgba(0, 0, 0, 0.9);
  align-items: center;
  /* padding-top: 10px; */
  h2 {
    color: orangered;
    font-size: 30px;
    font-weight: bold;
    font-family: poppins;
  }
  justify-content: center;
  @media (max-width: 800px) {
    padding-top: 70px;
  }
  /* margin-top: 20px; */
`;
