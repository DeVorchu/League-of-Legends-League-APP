import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContentWrapper } from '../../styles/main/content.styled';
import AddReplay from '../_addReplay'
import AddTeam from '../_addTeam'
import PlayersTable from '../_showPlayers'
import MatchsTable from '../_showMatchStats'


export default function index() {
  return (
    <ContentWrapper>


    <Routes>
      <Route path="/addteam" element={ <AddTeam/>}/>
      <Route path="/addreplay" element={ <AddReplay/>}/>
      <Route path="/stats" element={ <>SOON TM</>}/>
      <Route path="/matches" element={ <MatchsTable/>}/>
    </Routes>
    </ContentWrapper> 
  );
}
