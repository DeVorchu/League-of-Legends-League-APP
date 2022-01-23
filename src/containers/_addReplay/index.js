import React, { useRef, useState } from 'react';
import { FaFileVideo } from 'react-icons/fa';
import { ButtonStyled } from '../../styles/main/index.styled';
import { iconsLight } from '../../styles/colors.js'
import axios from 'axios';

export default function Index() {

  const [updateStatus, setUpdateStatus] = useState(false);
  const [demoData, setDemoData] = useState()

  const handleChange =  e => {
    e.target.files[0]?  console.log(e.target.files[0]): console.log('NULL');
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8")

    fileReader.onload = e => {
        let leagueData = e.target.result
        let startPos = leagueData.search('{"gameLength"')
        let result = leagueData.slice(startPos)
        let endPoint = result.search('}]"}')
        result = result.substring(0, endPoint +4);
        result = result.replace('"[', '[')
        result = result.replace(']"', ']') 
        result = result.replace(/\\/g, '')

        setDemoData(JSON.parse(result))
        fileRef.target.value = null;

        

    };
  };

  const SendDataToDB = async () =>{

  if (demoData !== 'clear') {
    const data = await axios.post('http://localhost:1338/api/test', {
            date: '',
            matchData: demoData
          })

          setDemoData('clear')
          

          console.log(data.status);
          setUpdateStatus(data.status === 201 ? 'UPDATE SUCCES!' : 'UPDATE FAIL!')

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
        <input id="file-upload" type='file' style={{display: 'none'}} onClick={handleChange} ref={fileRef}/>
        <FaFileVideo color={iconsLight}/> <span>ADD REPLAY</span>
        
      </ButtonStyled>

      

      <ButtonStyled  style={{margin: '20px 0 30px 20px '}} width='fit-content' onClick={SendDataToDB} >
        <span>ADD TO DB</span>
        
      </ButtonStyled>

      
  </>
  );
}
