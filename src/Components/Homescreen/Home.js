import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";
const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <Wrapper>
          <Pic>
            <img src="/1.jpg" />
          </Pic>
          <Text>
            <Main>
              My name is <span>Emmanuel Mbaeze</span>, <br />
              i'm a <span>Fullstack developer</span>.
            </Main>
            <Test>
              I'am a <span>Cloud Engineer</span> &
              <span>Fullstack developer</span>,who's passionate in providing
              solutions to problems.i develop applications with{" "}
              <span>HTML</span>,<span>CSS</span> and <span>JAVASCRIPT</span>
              with proficiency in <span>REACTJS</span> , <span>NODEJS </span>
              <span>Firebase</span> , <span>Data structures & Algorithm</span>
              and many more
            </Test>
          </Text>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Home;
const Main = styled.div`
  span {
    font-weight: 600;
    font-size: 24px;
    margin-left: 5px;
    color: #c38e55;
  }
  text-align: start;
  width: 100%;
  min-height: 30%;
  /* background-color: yellowgreen; */
  @media (max-width: 800px) {
    min-height: 10%;
    text-align: center;
    /* background-color: red; */
    justify-content: center;
  }
`;
const Test = styled.div`
  span {
    font-weight: 600;
    font-size: 14px;
    /* margin-left: 1px; */
    color: #c38e55;
  }
  text-align: start;
  width: 100%;
  min-height: 40%;
  font-weight: lighter;
  font-size: 15px;
  @media (max-width: 800px) {
    min-heights: 30%;
    text-align: center;
    /* background-color: red; */
  }
`;
const Pic = styled.div`
  @media (max-width: 800px) {
    height: 70vh;
  }
  width: 550px;
  height: 70vh;
  /* background-color: green; */
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const Text = styled.div`
  @media (max-width: 800px) {
    text-align: center;
    /* background-color: palegoldenrod; */
  }
  width: 410px;

  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  justify-content: space-around;
`;
const Wrapper = styled.div`
  width: 70%;
  /* height: calc(100vh-70px); */
  min-height: 70vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 5px;
  justify-content: space-between;
  background-color: rgba(17, 17, 17);
  @media (max-width: 800px) {
    display: flex;
    /* flex-direction: column-reverse; */
    justify-content: center;
  }
`;
const Container = styled.div`
  width: 100%;
  /* height: calc(100vh-70px); */
  height: 100vh;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    padding-top: 70px;
  }
`;
// #C38E55
