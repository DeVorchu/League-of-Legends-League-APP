import React from 'react';
import Header from '../../components/_Header';
import NavBar from '../../components/_NavBar'
import * as Config from '../../cfg/appText.js'

export default function index() {
  return (
  <Header>
    <NavBar config={Config}/>
  </Header>
  );
}
