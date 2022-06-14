import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Card = ({ title, pic }) => {
  return (
    <Hold>
      <Image src={pic} />

      {/* <Text>
        <Title>{title}</Title>
      </Text> */}
    </Hold>
  );
};

export default Card;
// const Container = styled.div``
// const Container = styled.div``
const Title = styled.div`
  font-weight: bolder;
  font-size: 17px;
  padding: 3px 0;
  text-align: center;
`;
const Description = styled.div`
  font-size: 11px;
  font-family: arvo;
  font-weight: 300;
  padding: 4px 0;
  text-align: center;
`;
const Text = styled.div`
  width: 200px;
  min-height: 30px;
  /* background-color: red; */

  @media (max-width: 320px) {
    width: 280px;
  }
`;
const Image = styled.img`
  width: 200px;
  height: 180px;
  object-fit: contain;
  border-radius: 6px;
  /* background-color: black; */
  @media (max-width: 320px) {
    width: 280px;
  }
`;
const Hold = styled.div`
  width: 200px;
  min-height: 180px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  /* background-color: red; */
  margin: 20px;
  padding-bottom: 4px;
  @media (max-width: 320px) {
    width: 280px;
  }
`;
