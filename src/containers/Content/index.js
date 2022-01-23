import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContentWrapper } from '../../styles/main/content.styled';
import AddReplay from '../_addReplay'
import AddTeam from '../_addTeam'
import PlayersTable from '../_showPlayers'


export default function index() {
  return (
    <ContentWrapper>


    <Routes>
      <Route path="/" element={<PlayersTable />}/>
      <Route path="/addteam" element={ <AddTeam/>}/>
      <Route path="/addreplay" element={ <AddReplay/>}/>
    </Routes>
    </ContentWrapper> 
  );
}
