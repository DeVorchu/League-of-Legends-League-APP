import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PlayersTable from '../../components/Data_Tables/playersTable';

export default function Index() {

  const [metchStatsData, setmetchStatsData] = useState();

  const GetAllMatchData = async () =>{
    const res = await axios.get('http://crystal-api.cytr.us/api/players')
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
