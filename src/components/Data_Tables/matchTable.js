import React  from 'react';
import { MatchWrapper, PlayerData, PlayerLabel } from '../../styles/components/matchData';

export default function MatchTable(props) {

    const players = props.matchesData
    const winner =  players.matchData[0].WIN
    
  return (
    <MatchWrapper>
        {winner? <h1>WYGRAŁ TEAM BLUE</h1> : <h1>WYGRAŁ TEAM RED</h1>}
        <PlayerLabel>

            
            <table>
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
                    <th>CW </th>

                </tr>
            </thead>
            
            <tbody>
            {players.matchData? players.matchData.map(el => 
            <tr>
                <td><span style={el.TEAM == 100? {color: 'blue' }: {color: 'red'} }>{el.NAME}</span></td>
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
                <td>{el.placedControlWards}</td>
                


            </tr>) : <></>}
            </tbody>
            </table>
        </PlayerLabel>
    </MatchWrapper>
  );
}
