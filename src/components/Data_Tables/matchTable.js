import React, { useEffect, useState }  from 'react';
import { TopInfoContainer, MidInfoContainer, MatchWrapper, BotInfoContainer, PlayerLabel,InfoContainer, TeamInfoBox, ScoreBox, BotInfoBox, MidInfoTeam, InfoTeamWrapper, TeamAvatarBorder, MatchScoresTable, AvatarHolder } from '../../styles/components/matchData';
import * as colors from '../../styles/colors.js'
import axios from 'axios';
import * as API from '../../api/api.config.js'

export default function MatchTable(props) {

    const [teamInfo, setteamInfo] = useState();
    const [singleMatchInfo, setmatchData] = useState(props.matchesData);

    const GetTeamInfo = async () =>{
        let arr = []
        const res100 =  await axios.get(`${API.baseUri}/teams/${players.team100Name.replace(/\s+/g, '%20')}`)
        arr.push(res100.data.ree[0])
        const res200 =  await axios.get(`${API.baseUri}/teams/${players.team200Name.replace(/\s+/g, '%20')}`)
        arr.push(res200.data.ree[0])

        console.log(arr);
        
        setteamInfo(arr)


        
    }


    const players = props.matchesData
    const winner =  players.matchData[0].WIN
   

    
    


    useEffect(() => {
        GetTeamInfo()
        console.log(teamInfo);
        console.log(singleMatchInfo);
    }, []);
    
    
  return (
    <MatchWrapper>
        

        <InfoContainer >
            
            <TopInfoContainer>
                {players.leagueName}
            </TopInfoContainer>

            <MidInfoContainer>
                <InfoTeamWrapper>
                    <TeamInfoBox>
                        <AvatarHolder>
                        {teamInfo? <img src={teamInfo[0].avatarLink} width='200px'/>: <></>} 
                        </AvatarHolder>
                        
                        
                        <TeamAvatarBorder/>
                    </TeamInfoBox>
                    <MidInfoTeam>
                    {players.team100Name}
                        <span>DIAMOND TIER</span>
                    </MidInfoTeam>
                </InfoTeamWrapper>
                <ScoreBox>
                   VS
                </ScoreBox>
                <InfoTeamWrapper>
                    <TeamInfoBox>   
                    <AvatarHolder>
                        {teamInfo? <img src={teamInfo[1].avatarLink} width='200px'/>: <></>} 
                        </AvatarHolder>
                        <TeamAvatarBorder/>
                    </TeamInfoBox>
                    <MidInfoTeam>
                        {players.team200Name}
                        <span>DIAMOND TIER</span>
                    </MidInfoTeam>
                </InfoTeamWrapper>
            </MidInfoContainer>

            <BotInfoContainer>
                    <BotInfoBox>
                        DATE
                        <span>{players.date}</span>
                    </BotInfoBox>

                    <BotInfoBox>
                        TIME
                        <span>10:30 PM</span>
                    </BotInfoBox>



                    <BotInfoBox>
                        TIER
                        <span>DIAMOND</span>
                    </BotInfoBox>

                    
            </BotInfoContainer>
        </InfoContainer>



        <PlayerLabel>

            
            <MatchScoresTable>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Character</th>
                    <th>K/D/A</th>
                    <th>Gold</th>
                    <th>CS</th>
                    <th>Drakes</th>
                    <th>Barons</th>
                    <th>Towers</th>
                    <th>2KS</th>
                    <th>3KS</th>
                    <th>4KS</th>
                    <th>5KS</th>
                    <th>Vision</th>
                    <th>WK </th>

                </tr>
            </thead>
            
            <tbody>
            {singleMatchInfo.matchData? singleMatchInfo.matchData.map(el => 
            <tr>
                <td><span style={el.TEAM == 100? {color: 'red' ,display: 'flex' }: {color: colors.buttonLight, display: 'flex'}} >{el.NAME}</span></td>
                <td><img src={`https://cdn.communitydragon.org/latest/champion/${el.SKIN}/square` } width='22px' alt={el.SKIN} /></td>
                <td>{el.CHAMPIONS_KILLED} / {el.NUM_DEATHS} / {el.ASSISTS}</td>
                <td>{(el.GOLD_EARNED / 1000).toFixed(1)} K</td>
                <td>{el.MINIONS_KILLED}</td>
                <td>{el.DRAGON_KILLS}</td>
                <td>{el.BARON_KILLS}</td>
                <td>{el.TURRETS_KILLED}</td>
                <td>{el.DOUBLE_KILLS}</td>
                <td>{el.TRIPLE_KILLS}</td>
                <td>{el.QUADRA_KILLS}</td>
                <td>{el.PENTA_KILLS}</td>
                <td>{el.VISION_SCORE}</td>
                <td>{el.WARD_KILLED}</td>
                


            </tr>) : <></>}
            </tbody>
            </MatchScoresTable>
        </PlayerLabel>
    </MatchWrapper>
  );
}
