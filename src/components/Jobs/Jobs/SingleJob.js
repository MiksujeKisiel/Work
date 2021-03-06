import React from "react";
import styled from "styled-components";
import { useFirestoreConnect } from "react-redux-firebase";
import { ReactComponent as Marker } from "../../../assets/svg/marker.svg";
import { ReactComponent as Wallet } from "../../../assets/svg/wallet.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Icon from "../../../assets/images/Icon.png";

const SingleJob = ({ jobs, id, userProfile }) => {
  useFirestoreConnect([{ collection: "jobs" }]);
  const loggedIn = useSelector((state) => state.firebase.auth.uid);
  const {
    location,
    companyName,
    name,
    level,
    earnings,
    requirement,
    userid,
  } = jobs;

  if (userProfile)
    return (
      <>
        {loggedIn === userid ? (
          <Wrapper to={"job/" + id} key={id}>
            <Image src={Icon} />
            <TopWrapper>
              <Name>{name}</Name>
              <Company>{companyName}</Company>
            </TopWrapper>
            <MidWrapper>
              <Level>{level}</Level>
              <Wallet className="svg" /> {earnings}zł
              <Marker className="svg" /> {location}
            </MidWrapper>
            <BottomWrapper>
              {requirement.slice(0, 3).map((text) => (
                <Attribute>{text.requirement}</Attribute>
              ))}
            </BottomWrapper>
          </Wrapper>
        ) : (
          ""
        )}
      </>
    );
  else {
    return (
      <Wrapper to={"job/" + id} key={id}>
        <Image src={Icon} />
        <TopWrapper>
          <Name>{name}</Name>
          <Company>{companyName}</Company>
        </TopWrapper>
        <MidWrapper>
          <Level>{level}</Level>
          <Wallet className="svg" /> {earnings}zł
          <Marker className="svg" /> {location}
        </MidWrapper>
        <BottomWrapper>
          {requirement.slice(0, 4).map((text) => (
            <Attribute>{text.requirement}</Attribute>
          ))}
        </BottomWrapper>
      </Wrapper>
    );
  }
};
export default SingleJob;

const Wrapper = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  border: 1px solid #ededed;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  background: white;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  @media (min-width: ${768}px) {
    width: 100%;
    margin: 0;
  }
  @media (min-width: ${1280}px) {
    padding: 30px;
  }
  @media (min-width: ${1440}px) {
    padding: 35px 35px 45px;
  }
`;
const Image = styled.img`
  width: 45px;
  height: 40px;

  @media (min-width: ${1440}px) {
    width: 55px;
    height: 55px;
  }
`;
const Name = styled.p`
  font-weight: 600;
  font-size: 19px;
  color: #555454;
  @media (min-width: ${768}px) {
    font-size: 16px;
  }
  @media (min-width: ${1280}px) {
    font-size: 19px;
  }
  @media (min-width: ${1440}px) {
    font-size: 20px;
  }
`;
const Company = styled.p`
  color: #ababab;
  font-size: 13px;
  line-height: 90%;
  font-weight: 500;
  @media (min-width: ${768}px) {
    font-size: 14px;
  }
  @media (min-width: ${1280}px) {
    font-size: 15px;
  }
`;

const Level = styled.p`
  background: #d1effc;
  padding: 3px 10px;
  border-radius: 10px;
  color: #29b6f6;
  font-weight: 500;
  font-size: 12px;

  @media (min-width: ${768}px) {
    font-size: 13px;
  }
  @media (min-width: ${1440}px) {
    font-size: 15px;
    padding: 5px 15px;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const MidWrapper = styled.div`
  width: 100%;
  padding: 25px 0 30px 0;
  display: flex;
  align-items: center;
  font-size: 13px;
  .svg {
    width: 15px;
    height: 15px;
    margin: 0 8px 0 20px;
  }
  @media (min-width: ${768}px) {
    .svg {
      width: 17px;
      height: 17px;
      margin: 0 8px 0 10px;
        }
    font-size: 12px;
    padding: 25px 0 30px 0;
  }
  @media (min-width: ${1440}px) {
    .svg {
      width: 19px;
      height: 19px;
      margin: 0 8px 0 15px;
    }
    font-size: 14px;
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  max-height: 30px;
  overflow: hidden;
`;

const Attribute = styled.p`
  font-size: 12px;
  background: #f5f5f5;
  color: #6b6b98;
  padding: 2px 8px;
  margin: 5px 0;
  font-weight: 500;
  border-radius: 10px;
  margin-right: 10px;
  @media (min-width: ${768}px) {
    font-size: 13px;
  }
  @media (min-width: ${1280}px) {
    font-size: 14px;
  }
  @media (min-width: ${1440}px) {
    padding: 3px 10px;
  }
`;
