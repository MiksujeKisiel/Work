import React from 'react'
import styled from 'styled-components'



const Group = styled.div`
margin: 15px 0;
position: relative;
width: 100%;
`

const StyledInput = styled.input`
width: 100%;
border: none;
background: #F4F5F8;
padding: 10px;
`
const Label = styled.label`
font-size: 14px;
color: #7481A1;
`

const Error = styled.div`
  color: red;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: translateY(${({ show }) => (show ? '20px' : '10px')});
  transition: all 0.1s;
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 500;
  font-size: 1.2rem;
`

const Input = ({  field, form: { touched, errors }, ...props }) => {
    return (
        <Group>
            <Label>{props.word}</Label>
            <StyledInput {...field} {...props}/>
            <Error show={errors[field.name] && touched[field.name]} >
            {errors[field.name]}
            </Error>
        </Group>

    )
}

export default Input