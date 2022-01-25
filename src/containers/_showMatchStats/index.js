import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PlayersTable from '../../components/Data_Tables/playersTable';
import * as API from '../../api/api.config.js'

export default function Index() {

  const [metchStatsData, setmetchStatsData] = useState();

  const GetAllMatchData = async () =>{
    const res = await axios.get(`${API.baseUri}/players`)
    console.log(res.data);
    setmetchStatsData(res.data.players)
  }

  useEffect(() => {
    GetAllMatchData()
  }, []);
  

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <PlayersTable playersData={metchStatsData} />
    </div>
  );
}
