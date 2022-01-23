import React from 'react';
import { AddTeamBox, AddTeamRow, AddTeamWrapper } from '../../styles/components/addTeam.styled';
import { InputStyled, ButtonStyled } from '../../styles/main/index.styled';


export default function index() {
  return (
    <AddTeamWrapper>
      <AddTeamRow >
        <AddTeamBox>
          <label>TEAM NAME</label>
          <InputStyled type='text' width='200px'/>
        </AddTeamBox>        
      </AddTeamRow>

      <AddTeamRow >
        <AddTeamBox>
          <label>PLAYER LIST</label>
          <InputStyled type='text' width='700px' placeholder='PLAYER1, PLAYER2, PLAYER3, PLAYER4, PLAYER5'/>
        </AddTeamBox>        
      </AddTeamRow>

      <ButtonStyled style={{marginTop: '20px'}} width='200px' >ADD</ButtonStyled>
    </AddTeamWrapper>
  );
}
