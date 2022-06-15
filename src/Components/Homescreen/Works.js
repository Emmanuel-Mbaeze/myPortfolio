import React from "react";
import Card from "./Card";
import styled from "styled-components";
import Header from "../Header/Header";
import Work from "./Work";
const Works = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Work
            pic=" /ss.jpeg"
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
            pic=" /ss.jpeg"
            message="This is a photography website  where users who needs photographer for events i.e weddings,birthdays and many more can come in,see the pictures taken by a photographer if inpressed with the pictures,then book for the photographer."
            title="rental--ride.herokuapp.com"
            link="https://rental--ride.herokuapp.com"
          />
          {/* <Work
            pic=" /ss.jpeg"
            message="This is a photography website  where users who needs photographer for events i.e weddings,birthdays and many more can come in,see the pictures taken by a photographer if inpressed with the pictures,then book for the photographer."
            title="https://rental--ride.herokuapp.com"
            link="https://stfcreate.herokuapp.com"
          />  */}
        </Wrapper>
      </Container>
    </>
  );
};

export default Works;

const One = styled.div`
  width: 200px;
  min-height: 180px;
  border-radius: 6px;
  margin: 20px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;
const Wrapper = styled.div`
  width: 70%;
  min-height: 80vh;
  /* background-color: rgba(0, 0, 0, 0.1); */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    padding-top: 20px;
  }
  /* background-color: red; */
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  justify-content: center;
`;
