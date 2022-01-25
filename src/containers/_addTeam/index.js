import axios from 'axios';
import React, { useState } from 'react';
import { AddTeamBox, AddTeamRow, AddTeamWrapper } from '../../styles/components/addTeam.styled';
import { InputStyled, ButtonStyled } from '../../styles/main/index.styled';
import * as API from '../../api/api.config'


export default function Index() {

  const [teamData, setteamData] = useState({teamName: '', teamAvatar: '', players:''});
  

  const handleAdd = async () =>{
    console.log(teamData);
    const res = await axios.post(`${API.baseUri}/teams`, {...teamData} )
    setteamData({teamName: '', teamAvatar: '', players:''})
  }


  return (
    <AddTeamWrapper>
      <AddTeamRow >
        <AddTeamBox>
          <label>TEAM NAME</label>
          <InputStyled type='text' width='200px' value={teamData.teamName} onChange={e =>setteamData({...teamData, teamName: e.target.value})}/>
        </AddTeamBox>        
      </AddTeamRow>

      <AddTeamRow >
        <AddTeamBox>
          <label>PLAYER LIST</label>
          <InputStyled type='text' width='700px' value={teamData.players} placeholder='PLAYER1, PLAYER2, PLAYER3, PLAYER4, PLAYER5' onChange={e =>setteamData({...teamData, players: e.target.value.split(',')})}/>
        </AddTeamBox>        
      </AddTeamRow>

      <AddTeamRow >
        <AddTeamBox>
          <label>TEAM AVATAR LINK</label>
          <InputStyled type='text' width='700px' value={teamData.teamAvatar} onChange={e =>setteamData({...teamData, teamAvatar: e.target.value})}/>
        </AddTeamBox>        
      </AddTeamRow>

      <ButtonStyled style={{marginTop: '20px'}} width='200px' onClick={handleAdd} >ADD</ButtonStyled>
    </AddTeamWrapper>
  );
}
