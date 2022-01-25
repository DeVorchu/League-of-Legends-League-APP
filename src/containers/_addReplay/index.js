import React, { useEffect, useRef, useState } from 'react';
import { FaFileVideo } from 'react-icons/fa';
import { ButtonStyled, InputStyled, LabelStyled, SelectStyled } from '../../styles/main/index.styled';
import { iconsLight } from '../../styles/colors.js'
import axios from 'axios';
import * as API from '../../api/api.config.js'
import Select from 'react-select'

export default function Index() {

  const [updateStatus, setUpdateStatus] = useState(false);
  const [demoData, setDemoData] = useState()
  const [leagueNames, setleagueNames] = useState({team100: 'w', team200: '', date: '', leagueName: ''});

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
        team200Name: leagueNames.team200,
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

const [ssd, setssd] = useState();
const [isSet, setisSet] = useState(false);

const GetTeams = async () => {
  const res = await axios.get(`${API.baseUri}/teams`)
  setssd(res.data.ree)
  setisSet(true)
}

const handleTeamOneChange = (e) =>{
  setleagueNames({...leagueNames, team100: e.target.value})
}
  


const handleTeamTwoChange = (e) =>{
  setleagueNames({...leagueNames, team200: e.target.value})
}

  const SummonerKDAHandler = (k, d, a) =>{
      if (d < 1) {
        return parseInt(k) + parseInt(a)
      }
    return Math.round(((parseInt(k) + parseInt(a)) / parseInt(d)) * 10) / 10
}

    const fileRef = useRef();

    useEffect(() => {
      GetTeams()

    }, []);
    



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

          <LabelStyled>TEAM #1 NAME</LabelStyled>
          {isSet? <SelectStyled onChange={handleTeamOneChange}  >
              {ssd.map(el => <option value={el.name}>{el.name}</option> ) }
          </SelectStyled> : <></>}

          <LabelStyled>TEAM #2 NAME</LabelStyled>
          {isSet? <SelectStyled onChange={handleTeamTwoChange}>
              {ssd.map(el => <option value={el.name}>{el.name}</option> ) }
          </SelectStyled> : <></>}

          <LabelStyled>MATCH DATE</LabelStyled>
          <InputStyled type='text' style={{marginBottom: '20px'}} placeholder='DD/MM/YYYY' value={leagueNames.date} onChange={e => setleagueNames({...leagueNames, date: e.target.value})}/>
            
          <LabelStyled>LEAGUE NAME</LabelStyled>
          <InputStyled type='text' style={{marginBottom: '20px'}}  value={leagueNames.leagueName} onChange={e => setleagueNames({...leagueNames, leagueName: e.target.value})}/>
         
          

  
        </div>

        

        {demoData? demoData.statsJson.map(el =>  <> {el.TEAM == 100? leagueNames.team100: leagueNames.team200} - {el.NAME} <br/> </> ) : <></>}
      </div>

      

      <ButtonStyled  style={{margin: '20px 0 30px 20px '}} width='fit-content' onClick={SendDataToDB} >
        <span>ADD TO DB</span>
        
        
      </ButtonStyled>

      
  </>
  );
}
