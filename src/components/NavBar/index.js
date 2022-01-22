import React from 'react';
import { NavBarWrapper, NavItem, NavItemSpacer } from '../../styles/components/navBar.styled';
import { FaPlus } from 'react-icons/fa';
import NavBarItem from './navItem'

export default function index() {
  return (
    <NavBarWrapper>
        <NavBarItem ico={<FaPlus />} text='REPLAY'/>
        <NavBarItem ico={<FaPlus />} text='TEAM'/>
        <NavItemSpacer />
        <NavBarItem text='PLAYER'/>
        <NavBarItem text='STATS'/>
        <NavBarItem text='MVP'/>
    </NavBarWrapper>
  );
}
