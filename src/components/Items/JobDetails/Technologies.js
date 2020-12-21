import React from 'react'
import styled from 'styled-components'


const Text = styled.p``

const Technologies = () => {
    return (
        <TechnologiesWrapper>
        <Header>Technologie, których używamy</Header>
        <Text technologies>Wymagane</Text>
        <TechnologyWrapper>
          <TechnologyText>HTML</TechnologyText>
          <TechnologyText>CSS</TechnologyText>
          <TechnologyText>REACT</TechnologyText>
          <TechnologyText>JAVASCRIPT</TechnologyText>
          <TechnologyText>Git</TechnologyText>
          <TechnologyText>SASS</TechnologyText>
        </TechnologyWrapper>
      </TechnologiesWrapper>
   
    )
}

export default Technologies

const TechnologyWrapper = styled.div`
  margin-top: 20px;
  width: auto;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 10px;
`;
const TechnologyText = styled.p`
  background: #e7e9f6;
  border-radius: 15px;
  padding: 10px 15px;
  color: #1c1c1c;
  font-size: 14px;
  margin: 10px 0 0 5px;
  transition: all 0.3 ease-in;
`;

const TechnologiesWrapper = styled.div`
  justify-content: flex-start;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  background: white;
  width: 90%;
  box-shadow: 0 0 10px rgba(21, 21, 21, 0.3);
  margin: 5px 0;
  padding: 30px 15px;
  border-radius: 10px;
  .svg {
    width: 22px;
    height: 22px;
    padding-top: 3px;
    fill: #1825aa;
    margin-right: 20px;
  }
`;

const Header = styled.h2`
  font-size: 22px;
  font-weight: 300;
  margin: 0 0 20px;
`;
