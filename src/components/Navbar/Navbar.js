import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Navbar = ({dashboard}) => {
  const [open, setOpen] = useState(false)
  return (
    <Nav dashboard={dashboard}>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Menu  open={open}/>
    </Nav>
  )
}
export default Navbar

const StyledBurger = styled.div`
  width: 3rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#ccc'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Nav = styled.nav`
  position: absolute;
  z-index: 200;
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    display: ${({ dashboard }) => dashboard ? 'none' : 'flex'};
  }
`;