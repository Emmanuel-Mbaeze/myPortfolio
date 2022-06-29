import React from "react";
import styled from "styled-components";
const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Left src="/1.jpg" />

        <Right>
          <Holder>
            <Up>
              {/* <Hold> */}
              My name is <span>Emmanuel Mbaeze</span> i'm a{" "}
              <span>Fullstack developer</span>.
            </Up>
            <MIddle>
              I'm a Cloud Engineer and Fullstack developer who's passionate in
              providing solutions to problems
            </MIddle>
            <Down>
              i develop applications with HTML, CSS and Javascript with
              proficiency in ReactJS, NodeJS, Firebase, Data structures &
              Algorithm, Figma, Cloud Computing, React Redux, React Query,
              MongoDB and many more
            </Down>
          </Holder>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Home;
const Holder = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  /* background-color: yellow; */
  width: 490px;
  color: white;
`;
const Down = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    font-size: 21px;
    /* background-color: aliceblue; */
  }
  span {
    color: orangered;
    font-size: 57px;
    margin-top: -97px;
    font-size: 19px;
    /* opacity: 1; */
  }
  margin-top: 25px;
  font: bold;
  color: #aaaa;
  /* font-style: 13px; */
  /* opacity: 0.5; */
`;
const MIddle = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    width: 98%;
    font-size: 21px;
    margin-top: 30px;
  }
  span {
    color: orangered;
    font-size: 57px;
    margin-top: -97px;
    font-size: 22px;
    /* opacity: 1; */
  }
  margin-top: 20px;
  font: bold;
  /* font-size: 13px; */
  /* font-size: 70px; */
  /* opacity: 0.5; */
  color: #aaaa;
  // background-color: blue;
`;

const Up = styled.div`
  width: 437px;
  min-height: 18vh;
  // background-color: pink;

  @media (max-width: 768px) {
    text-align: center;
    width: 70%;
    font-size: 22px;
    margin-top: 15px;
  }
  font-weight: bold;
  font-size: 22px;
  /* text-transform: capitalize; */
  span {
    color: orangered;
    font-size: 57px;
    margin-top: -97px;
    font-size: 27px;
  }
`;
const Right = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 470px;
  min-height: 71vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: brown; */
`;
const Left = styled.img`
  width: 520px;
  height: 71vh;

  object-fit: cover;
`;
const Wrapper = styled.div`
  @media (max-width: 768px) {
    width: 97%;
    // padding-bottom: 2px;
  }
  width: 80%;
  min-height: 71vh;
  background-color: transparent;
  // background-color: green;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 89.8vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;
