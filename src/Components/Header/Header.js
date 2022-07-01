import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Link to="/">
            <Logo src="/2.png" />
          </Link>
          <Navhold>
            <Navs to="/">Home</Navs>
            <Navs to="/Stacks">Stacks</Navs>
            <Navs to="/Works">Works</Navs>
          </Navhold>
        </Wrapper>
        <Icons>
          <AiOutlineMenu
            id="Menu"
            onClick={() => {
              document.getElementById("sidebar").style.width = "260px";
              document.getElementById("Menu").style.display = "none";
              document.getElementById("Close").style.display = "block";
            }}
          />
          <AiOutlineClose
            fontSize="25px"
            style={{
              display: "none",
            }}
            id="Close"
            onClick={() => {
              document.getElementById("sidebar").style.width = "0";
              document.getElementById("Menu").style.display = "block";
              document.getElementById("Close").style.display = "none";
            }}
          />
        </Icons>
        <Sidebar id="sidebar">
          <Hold>
            <Nav to="/">Home</Nav>
            <Nav to="/Stacks">Stacks</Nav>
            <Nav to="/Works">Works</Nav>
          </Hold>
        </Sidebar>
      </Container>
    </div>
  );
};

export default Header;
const Icons = styled.div`
  color: white;
  font-size: 27px;
  font-weight: bolder;
  display: none;
  cursor: pointer;
  @media (max-width: 830px) {
    display: block;
  }
`;
const Hold = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;
const Sidebar = styled.div`
  width: 0;
  height: 100vh;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  position: fixed;
  display: none;
  z-index: 10;
  transition: all 950ms;
  overflow: hidden;
  top: 0;
  left: 0;
  @media (max-width: 834px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Navs = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: all 600ms;
  color: white;
  :hover {
    transform: scale(1.02);
    font-size: 15px;
  }
`;
const Nav = styled(Link)`
  margin-top: 40px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  color: black;

  transition: all 600ms;
  :hover {
    transform: scale(1.02);
    font-size: 15px;
  }
`;
const Navhold = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 320px;
  /* background-color: red; */
  @media (max-width: 900px) {
    display: none;
  }
`;
const Logo = styled.img`
  width: 49px;
  height: 49px;
  object-fit: cover;
  border-radius: 100%;
`;
const Wrapper = styled.div`
  width: 83%;
  height: 60px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
`;
