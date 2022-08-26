import React from "react";
import styled from "styled-components";
// import "../../App.css";

const Footer = () => {
  //     const reveal = () => {
  //       let reveals = document.querySelectorAll(".reveal");

  //       for (let i = 0; i < reveals.length; i++) {
  //         let windowHeight = window.innerHeight;
  //         let revealTop = reveals[i].getBoundingClientRect().top;
  //         let revealPoint = 150;

  //         if (revealTop < windowHeight - revealPoint) {
  //           reveals[i].classList.add("active");
  //         } else {
  //           reveals[i].classList.remove("active");
  //         }
  //       }
  //     };
  //   window.addEventListener("scroll", reveal);
  return (
    <Container
    //  className="reveal"
    >
      <Wrapper>
        <Address>
          <h4>frr</h4>
        </Address>

        <Socials>
          <Copyright>@2022copyright</Copyright>
          <Icon>
            <img src="/ss.JPEG" />
            <img src="/tailor.jpg" />
            <img src="/book.jpg" />
            <img src="/1.jpg" />
            <img src="/sss.JPEG" />
          </Icon>
        </Socials>
      </Wrapper>
    </Container>
  );
};

export default Footer;
const Copyright = styled.div`
  height: 120px;
  width: 120px;
  color: orangered;
  font-size: 17px;
  font-weight: bold;
  font-family: poppins;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 900px) {
    height: 100%;
  }
`;
const Icon = styled.div`
  height: 120px;
  width: 220px;

  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  @media (max-width: 900px) {
    height: 100%;
  }
  img {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const Socials = styled.div`
  width: 390px;
  height: 100%;
  /* background-color: #1234; */
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    width: 520px;
  }
`;
const Address = styled.div`
  width: 520px;
  height: 120px;
  background-color: red;
  margin: 10px;
`;
const Wrapper = styled.div`
  width: 80%;
  min-height: 120px;
  /* background-color: #123456; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  min-height: 170px;
  /* background-color: rgba(0, 0, 0, 0.9); */
  background-color: #1234;

  display: flex;
  align-items: center;
  justify-content: center;
`;
