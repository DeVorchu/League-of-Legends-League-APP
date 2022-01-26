import styled from 'styled-components'
import * as colors from '../colors.js'

export const MatchWrapper = styled.div`    
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 150px;
`

export const PlayerLabel = styled.div`    
    width: 100%;
    display: flex;
    justify-content: center;

    
`

export const MatchDisplayHeader = styled.div`    
   
`

export const LogoContainer = styled.div`    
   
    
`

export const InfoContainer = styled.div`    
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`

export const TopInfoContainer = styled.div`    
    display: flex;
    font-size: 40px;
    font-weight: 600;
`
export const MidInfoContainer = styled.div`    
    display: flex;
    justify-content: space-between;
    width: 750px;
`

export const InfoTeamWrapper = styled.div`    

`

export const MidInfoTeam = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        color: ${colors.iconsLight}
    }
`

export const BotInfoContainer = styled.div`    
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: 30px;
`

export const TeamInfoBox = styled.div`    
    width: fit-content;
    height: 200px;
    width: 200px;
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
`

export const ScoreBox = styled.div`   
    display:flex;
    justify-content: center;
    align-items: center; 
    width: fit-content;
    font-size: 50px;
    font-weight: 700;  
`



export const BotInfoBox = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #666;
    font-size: 16px;
    font-weight: 600;
    
    span{
        margin-top: 5px;
        font-size: 16px;
        color: white;
    }
`

export const AvatarHolder = styled.div`   
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    content: '';
    z-index: 2;
`

export const TeamAvatarBorder = styled.div`   
    position: absolute;
    content: '';
    width: 90px;
    height: 90px;
    border: 8px solid ${colors.iconsLight};
    transform: rotate(45deg);
    z-index: 1;

`

export const MatchScoresTable = styled.table`   
   
    min-width: 1000px;
    margin-top: 60px;
    border: 1px ${colors.backgroundDark} solid;
    font-size: 14px;
    color: #999;
    background-color: ${colors.backgroundDark};
    border-spacing: 0;

    

    td{
        text-align: center;
        padding: 2px 8px;
    }

    tr{
        
    }

    th{
        background: ${colors.buttonLight};
        font-size: 16px;
        text-transform: uppercase;
        color: white;
        padding: 5px 3px;    
    }


`


