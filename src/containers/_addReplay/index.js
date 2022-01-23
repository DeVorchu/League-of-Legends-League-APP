import React, { useState } from 'react';
import { FaFileVideo } from 'react-icons/fa';
import { ButtonStyled } from '../../styles/main/index.styled';
import { iconsLight } from '../../styles/colors.js'
import axios from 'axios';

export default function Index() {

  const [updateStatus, setUpdateStatus] = useState(false);
  const [demoData, setDemoData] = useState()

  const handleChange =  e => {
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(e.target.files[0], "UTF-8")

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
        console.log(JSON.parse(result));
        //Axios to API 
        
        const data = await axios.post('http://localhost:1338/api/test', {
          date: '',
          matchData: JSON.parse(result)
        })

        console.log(data.status);
        setUpdateStatus(data.status === 201 ? true : false)

    };
  };


  const SummonerKDAHandler = (k, d, a) =>{
      if (d < 1) {
        return parseInt(k) + parseInt(a)
      }
    return Math.round(((parseInt(k) + parseInt(a)) / parseInt(d)) * 10) / 10
}




  return (
    <>
      <ButtonStyled htmlFor="file-upload" style={{marginLeft: '20px', marginRight: '50px'}} width='fit-content' >
        <input id="file-upload" type='file' style={{display: 'none'}} onClick={handleChange}/>
        <FaFileVideo color={iconsLight}/> <span>ADD REPLAY</span>
        
      </ButtonStyled>

    {updateStatus? <span>Update successful!</span> : <></>}
  </>
  );
}
