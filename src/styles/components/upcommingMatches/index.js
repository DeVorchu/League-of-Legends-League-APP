import styled from 'styled-components'

export const UppcomingMatchesWrapper = styled.div`    
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const UpcommingHeader = styled.div`    
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 26px;
    span{
        font-size: 15px;
    }
`

export const UpcommingTeamBox = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const UpcommingTeamBoxText = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
`
export const UpcommingTeamBoxMid = styled.div`    
    width: 100px;
    height: 100px;
    background: url(${({teamAvatar}) => teamAvatar });
    background-size: contain;
`



export const UpcommingTeamBoxVs = styled.div`    
   
`