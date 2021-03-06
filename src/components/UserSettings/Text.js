import React from "react";
import styled from "styled-components";

// const Text = styled.p`
//   font-size: 14px;
//   font-family: Arial, Helvetica, sans-serif;
//   color: #63DDC6;
//   padding-left: 1px;
// `;
// const BigText = styled.p`
//   margin: 35px 0 10px;
//   font-weight: 300;
//   font-size: 38px;
//   color: #63DDC6;
  
// `;

const TextWrapper = styled.div`
  padding: 40px 30px 30px;
  z-index: 10;

  @media (min-width: ${768}px) {
    padding: 00px 0 30px;
  }
`;

const TopText = ({ bigText, smallText }) => {
  return (
    <TextWrapper>
      {/* <BigText>{bigText}</BigText>
      <Text>{smallText}</Text> */}
    </TextWrapper>
  );
};

export default TopText;
