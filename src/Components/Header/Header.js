import React from "react";
import { Link } from "react-router-dom";
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
            <Nav to="/">Home</Nav>
            <Nav to="Stacks">Stacks</Nav>
            <Nav to="Works">Works</Nav>
          </Navhold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;
const Nav = styled(Link)`
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
const Navhold = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 320px;
  /* background-color: red; */
`;
const Logo = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 100%;
`;
const Wrapper = styled.div`
  width: 70%;
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
`;
