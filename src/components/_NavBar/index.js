import React from 'react';
import NavItem from './navItem.js'
import { FaDiscord,FaTwitter, FaTwitch } from 'react-icons/fa';
import { NavBarWrapper, NavLinks, NavLogo, NavLogoContainer, NavLogoIconsContainer } from '../../styles/components/header/navbar';

export default function index({config}) {
  return (
    <NavBarWrapper>
        <NavLogo >
            <NavLogoContainer>
                {config.leagueName}               
            </NavLogoContainer>
            <NavLogoIconsContainer>
                <FaDiscord />
                <FaTwitter />
                <FaTwitch />
            </NavLogoIconsContainer>
        </NavLogo>

        <NavLinks>
            {config.links.map(el=> <NavItem {...el}/>)}
            
        </NavLinks>
    </NavBarWrapper>
  );
}
