import React from 'react';
import { PlayerScoresTable } from '../../styles/components/playerTable';

export default function playersTable(props) {

    const SummonerKDAHandler = (k, d, a) =>{
        if (d < 1) {
        return parseInt(k) + parseInt(a)
        }
    return Math.round(((parseInt(k) + parseInt(a)) / parseInt(d)) * 10) / 10
    }

  return (
    <PlayerScoresTable >
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


                </tr>
            </thead>
            
            <tbody>
            {props.players? props.players.map(props => 
            <tr>
                <td><span>{props.name}</span></td>
                <td><img src={`https://cdn.communitydragon.org/latest/champion/${props.champion}/square` } width='22px' alt={props.champion} /></td>
                <td>{props.kills} / {props.deaths} / {props.assists}</td>
                <td>{(props.gold / 1000).toFixed(1)} K</td>
                <td>{props.creepScore}</td>
                <td>{props.drakes}</td>
                <td>{props.barons}</td>
                <td>{props.towers}</td>
                <td>{props.dbKills}</td>
                <td>{props.trKills}</td>
                <td>{props.qdKills}</td>
                <td>{props.ptKills}</td>
                <td>{props.visionScore}</td>

                


            </tr>) : <></>}
            </tbody>
            </table>
    </PlayerScoresTable>
  );
}
