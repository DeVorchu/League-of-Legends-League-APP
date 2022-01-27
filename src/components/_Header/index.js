import React from 'react';
import { HeaderWrapper } from '../../styles/components/header/header';

export default function Header(props) {
  return (
    <HeaderWrapper>
      {props.children}
    </HeaderWrapper>
  );
}
