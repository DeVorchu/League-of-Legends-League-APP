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
                    <th>Gracz</th>
                    <th>Postać</th>
                    <th>Pozycja</th>
                    <th>LVL</th>
                    <th>K/D/A</th>
                    <th>KDA</th>
                    <th>Ptk. Wizji</th>
                    <th>Wardy</th>
                    <th>Wardy wykrycia</th>
                    <th>Zabite wardy</th>                    
                    <th>CS</th>                    
                    <th>BRON</th>
                    <th>SMOKI</th>
                    <th>Wieże</th>
                    <th>Inhi</th>
                </tr>
            </thead>
            
            <tbody>
            {props.playersData? props.playersData.map(el => 
            <tr>
                <td><span  style={{color: el.TEAM == "100"? '#116cbe' : 'red'}}>{el.NAME}</span></td>
                <td><img src={`https://cdn.communitydragon.org/latest/champion/${el.SKIN}/square` } width='22px' alt={el.SKIN} /></td>
                <td>
                    <img src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${(el.INDIVIDUAL_POSITION).toLowerCase()}-blue.png`} width='22px'/>
                    </td>
                <td>{el.LEVEL}</td>
                <td>{el.CHAMPIONS_KILLED} / {el.NUM_DEATHS} / {el.ASSISTS}</td>
                <td>{SummonerKDAHandler(el.CHAMPIONS_KILLED, el.NUM_DEATHS, el.ASSISTS) } </td>
                <td>{el.VISION_SCORE}</td>
                <td>{el.WARD_PLACED}</td>
                <td>{el.WARD_PLACED_DETECTOR}</td>
                <td>{el.WARD_KILLED}</td>
                <td>{(el.TOTAL_DAMAGE_DEALT / 1000).toFixed(1)} K</td>
                <td>{(el.TOTAL_DAMAGE_TAKEN / 1000).toFixed(1)} K</td>
                <td>{(el.TOTAL_DAMAGE_DEALT_TO_CHAMPIONS / 1000).toFixed(1)} K</td>
                <td>{(el.TIME_CCING_OTHERS / 60).toFixed(1)} s</td>
                <td>{el.MINIONS_KILLED}</td>
                <td>{(el.MINIONS_KILLED / (el.TIME_PLAYED / 60)).toFixed(1)}</td>
                <td>{el.SPELL1_CAST} / {el.SPELL2_CAST} / {el.SPELL3_CAST} / {el.SPELL4_CAST}</td>
                <td>{el.BARON_KILLS} </td>
                <td>{el.DRAGON_KILLS} </td>
                <td>{el.TURRET_TAKEDOWNS} </td>
                <td>{el.BARRACKS_KILLED} </td>
            </tr>) : <></>}
            </tbody>
            </table>
    </div>
  );
}
