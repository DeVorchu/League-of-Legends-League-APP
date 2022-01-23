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
                    <th>K</th>
                    <th>D</th>
                    <th>A</th>

                </tr>
            </thead>
            
            <tbody>
            {props.playersData? props.playersData.map(el => 
            <tr>
                <td><span>{el.name}</span></td>
                <td><img src={`https://cdn.communitydragon.org/latest/champion/${el.champion}/square` } width='22px' alt={el.champion} /></td>
                <td>{el.kils}</td>
                <td>{el.deaths}</td>
                <td>{el.assists}</td>
                {/* <td>
                    <img src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${(el.INDIVIDUAL_POSITION).toLowerCase()}-blue.png`} width='22px'/>
                </td> */}


            </tr>) : <></>}
            </tbody>
            </table>
    </div>
  );
}
