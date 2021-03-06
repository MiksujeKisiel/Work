import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import {
  Data,
  Experience,
  Languages,
  Skills,
} from "../../components/Users/UserDetails";
import details from "../../assets/images/details-min.jpg";
import { Background } from "../../components/Background";

const UserDetails = ({ users }) => {
  useFirestoreConnect([{ collection: "users" }]);
  if (users) {
    return (
      <>
        <Background src={details} />
        <Wrapper>
          <SmallWrapper>
            <Data
              age={users.age}
              location={users.location}
              payment={users.payment}
              phone={users.phone}
              email={users.email}
              firstName={users.firstName}
              lastName={users.lastName}
              profession={users.profession}
            />
            <Experience experience={users.experience} />
            <Languages language={users.language} />
            <Skills skills={users.skills} />
          </SmallWrapper>
        </Wrapper>
      </>
    );
  } else if (!users) {
    return <p>nie ma</p>;
  }
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const user = state.firestore.data.users;
  return {
    users: user ? user[id] : null,
  };
};
export default connect(mapStateToProps)(UserDetails);

const Wrapper = styled.div`
  min-height: 100vh;
  margin-top: -200px;
  align-items: center;
  flex-direction: column;
  display: flex;
  background: #f5f5f5;
  @media (min-width: ${768}px) {
    padding: 40px 0;
  }
`;

const SmallWrapper = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  @media (min-width: ${768}px) {
    width: 100%;
    max-width: 800px;
  }
  @media (min-width: ${1280}px) {
    margin-right: 300px;
  }
`;
