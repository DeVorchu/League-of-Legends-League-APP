import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MatchesTable from '../../components/Data_Tables/matchTable.js';
import * as API from '../../api/api.config.js'

export default function Index() {

  const [metchStatsData, setmetchStatsData] = useState();
  const [teams, setteams] = useState();


  

  const GetAllMatchData = async () =>{
    const res = await axios.get(`${API.baseUri}/matches`)
    console.log(res.data.matches);
    setmetchStatsData(res.data.matches)
    SortTeamsData(res.data.matches)
  }

  const SortTeamsData = (data) =>{
    const Team1 = []
    const Team2 = []

    data.forEach(el => {
      el.matchData.TEAM == 100? Team1.push(el) : Team2.push(el)
      
    });
  }

  useEffect(() => {
    GetAllMatchData()
  }, []);
  

  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>

      {metchStatsData? metchStatsData.map(el => <MatchesTable matchesData={el} />) : <></>}
      
    </div>
  );
}
