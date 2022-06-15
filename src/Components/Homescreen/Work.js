import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Work = ({ title, pic, link, message }) => {
  return (
    <Hold>
      <Image src={pic} />

      <Text>
        <Title>
          {" "}
          <a href={link}> {title}</a>
        </Title>
        <Description>{message}</Description>
      </Text>
    </Hold>
  );
};

export default Work;
// const Container = styled.div``
// const Container = styled.div``
const Title = styled.div`
  a {
    color: white;
  }
  font-weight: 600;
  /* background-color: yellow; */
  width: 100%;
  font-size: 12px;
  padding: 3px 0;
  text-decoration: none;
  /* text-align: center; */
  cursor: pointer;
  color: white;
`;
const Description = styled.div`
  font-size: 11px;
  width: 100%;
  font-family: arvo;
  font-weight: 300;
  padding: 4px 0;
  /* text-align: center; */
  /* background-color: red; */
  color: darkgrey;
`;
const Text = styled.div`
  width: 235px;
  min-height: 30px;
  /* background-color: rebeccapurple; */

  @media (max-width: 320px) {
    width: 280px;
  }
`;
const Image = styled.img`
  width: 235px;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  background-color: white;
  @media (max-width: 320px) {
    width: 280px;
  }
`;
const Hold = styled.div`
  width: 235px;
  min-height: 180px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: white; */

  /* background-color: red; */
  margin: 20px;
  padding-bottom: 4px;
  @media (max-width: 320px) {
    width: 280px;
  }
`;
