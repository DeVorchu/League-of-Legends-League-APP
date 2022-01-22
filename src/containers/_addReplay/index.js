import React, { useState } from 'react';
import { FaFileVideo } from 'react-icons/fa';
import { ButtonStyled } from '../../styles/main/index.styled';
import { iconsLight } from '../../styles/colors.js'

export default function Index() {

  const [updateStatus, setUpdateStatus] = useState(false);

  return (
    <>
      <ButtonStyled style={{marginLeft: '20px', marginRight: '50px'}} width='fit-content'>
        <FaFileVideo color={iconsLight}/> <span>ADD REPLAY</span>
        
      </ButtonStyled>

    {updateStatus? <span>Update successful!</span> : <></>}
  </>
  );
}
