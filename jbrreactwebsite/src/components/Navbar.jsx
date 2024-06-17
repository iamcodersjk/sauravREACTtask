import React from 'react'
import {NavLink} from "react-router-dom"
import styled from 'styled-components';
const Navbar = () => {
    const Nav = styled.nav`
    .navbar-list{
    display:flex;
    gap: 5rem;

    li{
        list-style:none;

        .navlink{
            text-decoration:none;
            &:hover,
            &:active {
                color:${({theme})=> theme.colors.helper};
            }
        }
    }
}
    `;
  return (
    <Nav>
        <div className="menuIcon">
            <ul className='navbar-list'>
                <li>
                    <NavLink className="navlink" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/about">Aboutus</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    </Nav>
  )
}

export default Navbar