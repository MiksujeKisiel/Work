import React from "react";
import styled from "styled-components";

const Group = styled.div`
  margin: 15px 0;
  position: relative;
  width: 100%;
  @media (min-width: ${768}px) {
    width: 250px;
    margin: 15px 0px;
  }
  @media (min-width: ${1024}px) {
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: #d3d3d3 2px solid;
  padding: 10px 0;
  &:focus {
    border-bottom: #1b75bc 2px solid;
    outline: none;
  }
`;
const Label = styled.label`
  font-size: 14px;
  color: #7481a1;
`;

const Error = styled.div`
  color: red;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transform: translateY(${({ show }) => (show ? "20px" : "10px")});
  transition: all 0.1s;
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 500;
  font-size: 1.2rem;
`;

const Input = ({ field, long, form: { touched, errors }, ...props }) => {
  return (
    <Group long={long}>
      <Label>{props.word}</Label>
      <StyledInput {...field} {...props}></StyledInput>
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </Group>
  );
};

export default Input;
