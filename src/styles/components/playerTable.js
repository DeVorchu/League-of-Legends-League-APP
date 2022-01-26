import styled from 'styled-components'
import * as colors from '../colors.js'

export const PlayerScoresTable = styled.table`   
   
    
    margin-top: 20px;
    border: 1px ${colors.backgroundDark} solid;
    font-size: 14px;
    color: #999;
    background-color: ${colors.backgroundDark};
    border-spacing: 0;

    

    td{
        text-align: center;
        padding: 2px 4px;
    }

    tr{
        
    }

    th{
        background: ${colors.buttonLight};
        font-size: 16px;
        text-transform: uppercase;
        color: white;
        padding: 5px 3px;    
        min-width: 79px;
    }


`