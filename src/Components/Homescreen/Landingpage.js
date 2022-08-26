import React from "react";
import styled from "styled-components";
const Landingpage = () => {
  return (
    <Container>
      <Title>
        Hello, i'm <span>Emmanuel Mbaeze</span>
      </Title>
      <Text>
        {" "}
        I'm a Fullstack developer who's passionate in providing scalable
        software solutions to software problems with software technologies,for
        the betterment of the world at large.I'm also a skilled leader,who's
        bent on achieveing goals with the ability to learn and work with a team.
      </Text>
      <Button>Let's Chat</Button>
    </Container>
  );
};

export default Landingpage;
const Button = styled.button`
  padding: 10px 12px;
  border: none;
  outline: none;
  font-size: 17px;
  font-family: poppins;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 30px;
  opacity: 0;
  position: relative;
  animation-name: btn;
  animation-duration: 5s;
  animation-delay: 7s;
  animation-fill-mode: forwards;

  @keyframes btn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  :hover {
    background-color: transparent;
    color: orangered;
    /* transform: rotateY(180deg); */
    transform: scale(1.02);
    transition: all 650ms;
    border: 1.5px solid #ddd;
  }
`;
const Text = styled.div`
  font-size: 17px;
  font-weight: 300;
  width: 700px;
  margin-top: 30px;
  position: relative;
  animation-name: text;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  @media (max-width: 425px) {
    width: 90%;
  }
  @keyframes text {
    0% {
      left: -1000px;
    }
    100% {
      left: 0;
    }
  }
`;
const Title = styled.div`
  font-size: 35px;
  margin-top: 200px;
  position: relative;
  animation-name: title;
  animation-duration: 5s;
  animation-fill-mode: forwards;
  @media (max-width: 425px) {
    font-size: 30px;
  }
  @media (max-width: 375px) {
    margin-top: 150px;
    font-size: 25px;
  }
  @keyframes title {
    0% {
      top: -1000px;
    }
    100% {
      top: 0;
    }
  }
  span {
    color: orangered;
  }
`;
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background-color: rgba(0, 0, 0, 0.9);
  color: #aaaa;
  font-weight: 500;
  font-family: poppins;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
