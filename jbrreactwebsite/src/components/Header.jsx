import React from 'react'
import {NavLink} from "react-router-dom"
import Navbar from './Navbar'
import styled from 'styled-components'
const Header = () => {
  return (
   <MainHeader>
    <NavLink to="/">
    <img src="https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-banyan-tree-logo-design-vector-png-image_6131481.png" alt="logo" className='logo' />
    </NavLink>
    <Navbar />
    </MainHeader>
  )
}

const MainHeader = styled.header`
padding: 5.8rem;
height: 6rem;
backgroung-color: ${({theme})=> theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;

.logo{
  height:6rem;
}
`;

export default Header