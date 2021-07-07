import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: #007881;
  height: 100vh;
  width: 220px;
  position: fixed;
  border-bottom: 2px solid #f1f1f1;
  padding: 10px;
  text-decoration: none;
  //flex-flow: row nowrap;
  //justify-content: space-between;
  color: #f1f1f1;

  .logoName {
    padding: 10px;
    width: 50%;
  }
  .simbolo{
    padding: 10px;
    width: 30vh;
  }
  @media (max-width: 900px) {
    width: 0;
    height: 100%;

  }
`

const Navbar = () => {
  return (
    <Nav>
      <Link to="/admin" >
      <div className="logoName">
        <img src={logo} className="simbolo" alt="logo da global hitss"/>
      </div></Link>
      
      <Burger />
    </Nav>
  )
}

export default Navbar