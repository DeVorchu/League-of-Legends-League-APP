import React, { useEffect, useRef, useState } from 'react';
import { FaFileVideo } from 'react-icons/fa';
import { ButtonStyled, InputStyled } from '../../styles/main/index.styled';
import { iconsLight } from '../../styles/colors.js'
import axios from 'axios';
import * as API from '../../api/api.config.js'

export default function Index() {

  const [updateStatus, setUpdateStatus] = useState(false);
  const [demoData, setDemoData] = useState()
  const [leagueNames, setleagueNames] = useState({team100: '', team200: '', date: '', leagueName: ''});

  const handleChange =  e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8")

    

    fileReader.onload = async e => {
        let leagueData = e.target.result
        let startPos = leagueData.search('{"gameLength"')
        let result = leagueData.slice(startPos)
        let endPoint = result.search('}]"}')
        result = result.substring(0, endPoint +4);
        result = result.replace('"[', '[')
        result = result.replace(']"', ']') 
        result = result.replace(/\\/g, '')

        setDemoData(JSON.parse(result))
        e.target.value = null;
    };
  };

  const SendDataToDB = async () =>{
    
    if (demoData) {
      const data = await axios.post(`${API.baseUri}/matches`, {
        date: leagueNames.date,
        matchData: demoData,
        team100Name: leagueNames.team100,
        team200Name: leagueNames.team100,
        leagueName: leagueNames.leagueName
      })
  
     
      if (data.status === 200) {
        setUpdateStatus('UPDATE SUCCES!')
        setleagueNames({team100: '', team200: '', date: '', leagueName: ''})
        setDemoData()
      } else {
        setUpdateStatus('UPDATE FAIL!')
      } 
            
      setTimeout(function(){
        setUpdateStatus('')        
      }, 3000);
      } else {
        setUpdateStatus('NO FILE')
        setTimeout(function(){
          setUpdateStatus('')
      }, 3000);
    
    }
}



  const SummonerKDAHandler = (k, d, a) =>{
      if (d < 1) {
        return parseInt(k) + parseInt(a)
      }
    return Math.round(((parseInt(k) + parseInt(a)) / parseInt(d)) * 10) / 10
}

    const fileRef = useRef();

  return (
    <>
    <div style={{height: '30px', display:' flex', alignItems: 'center', paddingLeft: '20px'}}>
    {updateStatus? <span >{updateStatus}</span> : <></>}
    </div>
    
      <ButtonStyled htmlFor="file-upload" style={{margin: '20px 0 0 20px '}} width='fit-content'  >
        <input id="file-upload" type='file' style={{display: 'none'}} onChange={handleChange} ref={fileRef}/>
        <FaFileVideo color={iconsLight}/> <span>ADD REPLAY</span>
        
      </ButtonStyled>

      <div style={{display: 'flex'}}>
        <div style={{width:'300px', padding: '30px'}}>
          TEAM #1 NAME<InputStyled type='text' style={{marginBottom: '20px'}} value={leagueNames.team100} onChange={e => setleagueNames({...leagueNames, team100: e.target.value})}/>
          TEAM #2 NAME<InputStyled type='text' style={{marginBottom: '20px'}} value={leagueNames.team200} onChange={e => setleagueNames({...leagueNames, team200: e.target.value})}/>
          MATCH DATE<InputStyled type='text' style={{marginBottom: '20px'}} placeholder='DD/MM/YYYY' value={leagueNames.date} onChange={e => setleagueNames({...leagueNames, date: e.target.value})}/>
          LEAGUE NAME<InputStyled type='text' style={{marginBottom: '20px'}}  value={leagueNames.leagueName} onChange={e => setleagueNames({...leagueNames, leagueName: e.target.value})}/>
        </div>

        {demoData? demoData.statsJson.map(el =>  <> {el.TEAM == 100? 'TEAM #1 - ': 'TEAM #2 - '}{el.NAME} <br/> </> ) : <></>}
      </div>

      

      <ButtonStyled  style={{margin: '20px 0 30px 20px '}} width='fit-content' onClick={SendDataToDB} >
        <span>ADD TO DB</span>
        
        
      </ButtonStyled>

      
  </>
  );
}
