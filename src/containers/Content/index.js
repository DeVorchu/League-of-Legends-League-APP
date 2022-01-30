import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContentWrapper, ContentLeft, ContentRight } from '../../styles/main/content.styled';
import AddReplay from '../_addReplay'
import AddTeam from '../_addTeam'
import PlayersTable from '../_showPlayers'
import MatchsTable from '../_showMatchStats'
import AddTeamBanner from '../../components/_RegisterTeamBanner'
import UpcommingMatches from '../../components/_upcommingMatches'


export default function index() {
  return (
    <ContentWrapper>

      <ContentLeft>
        <AddTeamBanner />
        {/* <Routes>
          <Route path="/addteam" element={ <AddTeam/>}/>
          <Route path="/addreplay" element={ <AddReplay/>}/>
          <Route path="/stats" element={ <PlayersTable/>}/>
          <Route path="/matches" element={ <MatchsTable/>}/>
        </Routes> */}
      </ContentLeft>
        
      <ContentRight>
      <UpcommingMatches />
      </ContentRight>
    
    </ContentWrapper> 
  );
}
