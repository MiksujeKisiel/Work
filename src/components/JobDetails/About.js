import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  width: 90%;
  box-shadow: 0 0 10px rgba(21, 21, 21, 0.3);
  margin: 10px 0;
  padding: 30px 30px;
  @media (min-width: ${600}px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .companyName {
    width: 40%;
  }
`;

const Company = styled.h2``;
const Text = styled.p`
  width: 60%;
`;

const About = ({ about, companyName }) => {
  if (about || companyName)
    return (
      <Wrapper>
        <div className="companyName">
          <Company>{companyName}</Company>
        </div>
        <Text>{about}</Text>
      </Wrapper>
    );
  else if (!about || !companyName) {
    return null;
  }
};

export default About;
