import React from 'react';
import { NavItem } from '../../styles/components/navBar.styled';

export default function navItem(props) {
  return (
    <NavItem > 
        {props.ico} 
        <span>{props.text}</span> 
    </NavItem>
  );
}
