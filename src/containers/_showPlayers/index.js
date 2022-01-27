import React, { useState } from 'react'
import DisplayPlayerTable from '../../components/Data_Tables/playersTable'
import { ButtonStyled, InputStyled } from '../../styles/main/index.styled'
import * as API from '../../api/api.config.js'
import axios from 'axios'
import { MatchesWrapper } from '../../styles/main/matches.styled'

export default function Index() {

  const [searchBar, setsearchBar] = useState({name: ''});
  const [showTable, setshowTable] = useState(false);
  const [playerData, setplayerData] = useState();

  const SearchHandler = async () => {
    setshowTable(true)
    const res = await axios.get(`${API.baseUri}/players/${searchBar.name}`)
    console.log(res.data.players);
    setplayerData(res.data.players)
   
  }

  return (
    <MatchesWrapper>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
        <InputStyled style={{ marginRight: '20px'}} value={searchBar.name} onChange={e=> setsearchBar({...searchBar, name: e.target.value})}/>
        <ButtonStyled onClick={SearchHandler}> LOOK FOR A PLAYER</ButtonStyled>
      </div>

      {showTable? playerData ?<DisplayPlayerTable players={playerData}/> : <></> : <></>}
      
    </MatchesWrapper>
    
  );
}
