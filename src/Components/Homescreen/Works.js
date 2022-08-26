import React from "react";
import Card from "./Card";
import styled from "styled-components";
import Header from "../Header/Header";
import Work from "./Work";
// import "../../App.css";

const Works = () => {
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
      {/* <One>Projects</One> */}
      <h2>Projects</h2>
      <Wrapper>
        <Work
          pic=" /sss.jpeg"
          message="This is a photography website  where users who needs photographer for events i.e weddings,birthdays and many more can come in,see the pictures taken by a photographer if inpressed with the pictures,then book for the photographer."
          title="stfcreate.herokuapp.com"
          link="https://stfcreate.herokuapp.com"
        />
        <Work
          pic=" /3.jpg"
          message="This is a photography website  where users who needs photographer for events i.e weddings,birthdays and many more can come in,see the pictures taken by a photographer if inpressed with the pictures,then book for the photographer."
          title="theatre-net.herokuapp.com"
          link="https://theatre-net.herokuapp.com"
        />
        <Work
          pic=" /C8.png"
          message="This is a photography website  where users who needs photographer for events i.e weddings,birthdays and many more can come in,see the pictures taken by a photographer if inpressed with the pictures,then book for the photographer."
          title="rental--ride.herokuapp.com"
          link="https://rental--ride.herokuapp.com"
        />
        <Work
          pic=" /book.jpg"
          message="This is a photography website  where users who needs photographer for events i.e weddings,birthdays and many more can come in,see the pictures taken by a photographer if inpressed with the pictures,then book for the photographer."
          title="i-jot.herokuapp.com"
          link="https://i-jot.herokuapp.com"
        />
        <Work
          pic=" /upload.png"
          message="This is a photography website  where users who needs photographer for events i.e weddings,birthdays and many more can come in,see the pictures taken by a photographer if inpressed with the pictures,then book for the photographer."
          title="images-uploads.netlify.app"
          link="https://images-uploads.netlify.app"
        />
      </Wrapper>
    </Container>
  );
};

export default Works;

const One = styled.div`
  color: orangered;
  width: 80%;
  font-size: 30px;
  font-weight: 500;
  font-family: poppins;
  background-color: white;
`;
const Wrapper = styled.div`
  width: 90%;
  min-height: 80vh;

  /* background-color: rgba(0, 0, 0, 0.1); */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    padding-top: 20px;
  }
`;
const Container = styled.div`
  /* width: 100%; */
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 50px;
  justify-content: center;
  /* margin: 100px; */
  h2 {
    color: orangered;
    font-size: 30px;
    font-weight: bold;
    font-family: poppins;
  }
`;
