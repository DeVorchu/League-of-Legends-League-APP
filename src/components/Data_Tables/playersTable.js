import React from 'react';

export default function playersTable(props) {

    const SummonerKDAHandler = (k, d, a) =>{
        if (d < 1) {
        return parseInt(k) + parseInt(a)
        }
    return Math.round(((parseInt(k) + parseInt(a)) / parseInt(d)) * 10) / 10
    }

  return (
    <div >
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
                    <th>Q</th>
                    <th>W</th>
                    <th>E</th>
                    <th>R</th>
                    <th>Vision</th>
                    <th>WK </th>
                    <th>CW </th>

                </tr>
            </thead>
            
            <tbody>
            {props.playersData? props.playersData.map(el => 
            <tr>
                <td><span>{el.name}</span></td>
                <td><img src={`https://cdn.communitydragon.org/latest/champion/${el.champion}/square` } width='22px' alt={el.champion} /></td>
                <td>{el.kills} / {el.deaths} / {el.assists}</td>
                <td>{(el.gold / 1000).toFixed(1)} K</td>
                <td>{el.creepScore}</td>
                <td>{el.drakes}</td>
                <td>{el.barons}</td>
                <td>{el.towers}</td>
                <td>{el.dbKills}</td>
                <td>{el.trKills}</td>
                <td>{el.qdKills}</td>
                <td>{el.ptKills}</td>
                <td>{el.qSpell}</td>
                <td>{el.wSpell}</td>
                <td>{el.eSpell}</td>
                <td>{el.rSpell}</td>
                <td>{el.visionScore}</td>
                <td>{el.killedWards}</td>
                <td>{el.placedControlWards}</td>
                


            </tr>) : <></>}
            </tbody>
            </table>
    </div>
  );
}
