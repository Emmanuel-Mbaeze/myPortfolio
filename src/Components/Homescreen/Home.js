import React from "react";
import styled from "styled-components";
// import "../../App.css";

const Home = () => {
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
      <Wrapper>
        <Left src="/x.jpg" />

        <Right>
          <Holder>
            <Up>
              My name is <span>Emmanuel Mbaeze</span> <br /> i'm a{" "}
              <span>Fullstack developer</span>.
            </Up>
            <MIddle>
              I'm a Cloud Engineer and Fullstack developer who's passionate in
              providing solutions to problems
            </MIddle>
            <MIddle>
              I'm aware of how tedios tasks can be and i know i have to align
              myself with people,it's my desire to work with a team and achieve
              excellent result in every project.I believe in delivering the best
              with software technology i'm familiar with.
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
  width: 100%;
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
  min-height: 12vh;
  /* margin-top: 35px; */

  /* background-color: pink; */
  @media (max-width: 768px) {
    text-align: center;
    width: 90%;
    font-size: 20px;
    margin-top: 15px;
  }
  @media (max-width: 375px) {
    font-size: 24px;
    width: 100%;

    font-weight: 500;
  }
  font-weight: bold;
  font-size: 22px;
  /* text-transform: capitalize; */
  span {
    color: orangered;
    font-size: 57px;
    margin-top: -97px;
    font-size: 24px;
  }
`;
const Right = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 1224px) {
    width: 450px;
    /* background-color: brown; */
  }
  width: 450px;
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
  @media (max-width: 414px) {
    width: 400px;
    height: 61vh;
  }
  @media (min-width: 320px) and (max-width: 375px) {
    width: 320px;
  }
  @media (max-width: 1224px) {
    width: 470px;
  }
`;
const Wrapper = styled.div`
  @media (max-width: 768px) {
    width: 97%;
    // padding-bottom: 2px;
  }
  width: 80%;
  min-height: 71vh;
  background-color: transparent;
  /* background-color: green; */

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    justify-content: center;
  }
  @media (max-width: 1024px) {
    width: 95%;
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
