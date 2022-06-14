import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";
const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <Wrapper>
          <Text>
            <Main>
              Hi i'm <span>Emmanuel Mbaeze</span>
            </Main>
            <Test>
              I'am a FULLSTACK ENGINEER ,who's passionate in providing solutions
              to problems.i develop applications with HTML,CSS and JAVASCRIPT
              with proficiency in REACTJS, NODEJS and many more
            </Test>
          </Text>
          <Pic>
            <img src="/1.jpg" />
          </Pic>
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
  }
  text-align: start;
  width: 100%;
  height: 40%;
  display: flex;
  align-items: flex-end;
  justify-content: start;
  @media (max-width: 800px) {
    min-height: 10%;
    /* background-color: red; */
  }
`;
const Test = styled.div`
  text-align: start;
  width: 100%;
  min-height: 40%;
  font-weight: lighter;
  font-size: 15px;
  @media (max-width: 800px) {
    min-heights: 30%;
    /* background-color: red; */
  }
`;
const Pic = styled.div`
  width: 550px;
  height: 60vh;
  /* background-color: green; */
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const Text = styled.div`
  @media (max-width: 800px) {
    /* background-color: palegoldenrod; */
    height: 30vh;
  }
  width: 400px;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  justify-content: space-around;
`;
const Wrapper = styled.div`
  width: 70%;
  /* height: calc(100vh-70px); */
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  /* background-color: thistle; */
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
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
