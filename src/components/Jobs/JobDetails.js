import React from "react";
import styled from "styled-components";
import { ReactComponent as Marker } from "../../assets/svg/marker.svg";
import { ReactComponent as JobTime } from "../../assets/svg/jobtime.svg";
import { ReactComponent as JobType } from "../../assets/svg/jobtype.svg";
import { ReactComponent as JobLevel } from "../../assets/svg/joblvl.svg";
import { ReactComponent as Money } from "../../assets/svg/money.svg";
import { ReactComponent as Talk } from "../../assets/svg/talk.svg";

const Wrapper = styled.div`
  background: #f1f1f1;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const OfferHeader = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 90%;
  box-shadow: 0 0 10px rgba(21, 21, 21, 0.3);
  margin: 10px 0;
  padding: 30px 0;
  .svg {
    width: 40px;
    height: 44px;
    fill: #1825aa;
    background: #e4e6f3;
    padding: 11px;
    border-radius: 100px;
    margin-right: 10px;
  }
  .money {
    width: 60px;
    height: 60px;
    fill: #1825aa;
    padding: 11px 2px;
    margin-right: 5px;
  }
`;

const Text = styled.p`
  font-size: ${(props) => (props.company ? "17px" : "15px")};
  font-weight: ${(props) => (props.company || props.technologies ? "600" : "")};
  color: ${(props) => (props.money ? "#1825aa" : "#1c1c1c")};
`;
const BigText = styled.p`
  font-size: 23px;
  font-weight: bold;
  color: #1825aa;
  margin-bottom: 3px;
`;

const MoneyWrapper = styled.div`
  display: flex;
  border-left: 3px solid #1825aa;
  align-items: center;
  background: #e7e9f6;
  margin: 20px 0;
`;
const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
`;

const MoneyTextWrapper = styled.div``;
const SvgWrapper = styled.div``;

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
`;

const Header = styled.h2`
  font-size: 22px;
  font-weight: 300;
  margin: 0 0 20px;
`;

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
const JobDetails = () => {
  return (
    <Wrapper>
      <OfferHeader>
        <InfoWrapper>
          <Text company>Frontend Developer</Text>
        </InfoWrapper>
        <MoneyWrapper>
          <SvgWrapper>
            <Money className="money" />
          </SvgWrapper>
          <MoneyTextWrapper>
            <BigText>3 500zł - 4 000zł</BigText>
            <Text money>brutto / mies.</Text>
          </MoneyTextWrapper>
        </MoneyWrapper>
        <InfoWrapper>
          <SvgWrapper>
            <Marker className="svg" />
          </SvgWrapper>
          <Text>Warszawa, mazowieckie</Text>
        </InfoWrapper>
        <InfoWrapper>
          <SvgWrapper>
            <Talk className="svg" />
          </SvgWrapper>
          <Text>Rekrutacja zdalna</Text>
        </InfoWrapper>
        <InfoWrapper>
          <SvgWrapper>
            <JobType className="svg" />
          </SvgWrapper>
          <Text>Umowa o prace</Text>
        </InfoWrapper>
        <InfoWrapper>
          <SvgWrapper>
            <JobTime className="svg" />
          </SvgWrapper>
          <Text>Pełny etat</Text>
        </InfoWrapper>
        <InfoWrapper>
          <SvgWrapper>
            <JobLevel className="svg" />
          </SvgWrapper>
          <Text>Wyższy specjalista (Senior)</Text>
        </InfoWrapper>
      </OfferHeader>
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
      <TechnologiesWrapper>
      <Header>Twój zakres obowiązków</Header>


      </TechnologiesWrapper>
    </Wrapper>
  );
};

export default JobDetails;