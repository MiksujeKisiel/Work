import React from "react";
import styled from "styled-components";

export const Experience = ({ experience }) => {
  if (experience && experience.length > 0)
    return (
      <Wrapper>
        <Header>Doświadczenie</Header>
        <SmallWrapper>
          {experience.map((item, i) => {
            return (
              <ExperienceWrapper key={i} value={item}>
                <Text>{item.name}</Text> <SmallText>{item.type}</SmallText>
              </ExperienceWrapper>
            );
          })}
        </SmallWrapper>
      </Wrapper>
    );
    else return null
};


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  color: #0f69c3;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  padding: 20px 0;
  @media (min-width: ${768}px) {
    border: 1px solid #deddda;
    border-radius: 15px 10px;
    font-size: 22px;
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 5px;
`;
const SmallText = styled.p`
  font-size: 15px;
  font-weight: 300;
`;

const SmallWrapper = styled.ul`
  margin-top: 20px;
  width: 100%;
  border-top: 1px solid #d9d9d9;
  padding: 20px 29px 10px 20px;
  display: flex;
  flex-direction: column;
`;
const Header = styled.p`
  font-size: 20px;
  color: #0f69c3;
  margin-left: 40px;
`;
const ExperienceWrapper = styled.div`
  margin: 10px 0 10px 60px;
  padding: 0 0 10px;
  border-bottom: 1px solid #deddda;
  &:last-of-type {
    border: none;
  }
`;

