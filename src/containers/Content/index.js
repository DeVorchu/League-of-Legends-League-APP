import React from 'react';
import { ContentWrapper } from '../../styles/main/content.styled';
import AddReplay from '../_addReplay'
import AddTeam from '../_addTeam'


export default function index() {
  return (
    <ContentWrapper>
      <AddReplay/>
      <AddTeam/>
    </ContentWrapper> 
  );
}
