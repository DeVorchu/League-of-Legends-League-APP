import React from 'react';
import { NavBarWrapper, NavItem, NavItemSpacer } from '../../styles/components/navBar.styled';
import { FaPlus } from 'react-icons/fa';
import NavBarItem from './navItem'
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <NavBarWrapper>
        <Link to="/addreplay"><NavBarItem ico={<FaPlus />} text='REPLAY'/></Link>
        <Link to="/addteam"><NavBarItem ico={<FaPlus />} text='TEAM'/></Link>
        <NavItemSpacer />
        <Link to="/players"><NavBarItem text='PLAYER'/></Link>
        <Link to="/matches"><NavBarItem text='MATCHES'/></Link>
        <Link to="/stats"><NavBarItem text='STATS'/></Link>
        <Link to="/mvps"><NavBarItem text='MVP'/></Link>
    </NavBarWrapper>
  );
}
