import styled, { createGlobalStyle } from 'styled-components'
import * as colors from '../colors'


export const MainStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Play&display=swap');

    body {    
        background: ${colors.backgroundDark};
        color: ${colors.textColor};
        margin: 0;
        font-family: 'Play', sans-serif;
        font-size: 14px;
        a{
            color: white;
            text-decoration: none;
        }

        
    }

    

    table{
    min-width: 800px;
    margin-top: 60px;
    border: 1px ${colors.backgroundDark} solid;
    border-radius: 5px 5px 0 0;
    font-size: 14px;
    border-spacing: 0px;
    color: #999;
    background-color: ${colors.buttonDark};


    }

    td{
        background-color: rgb(4, 8, 24);
        padding: 6px 12px;
        border-bottom: 1px rgb(5, 30, 59) solid;
        text-align: center;
    }

    tr{
        border: 2px rgb(10, 84, 134) solid;
    }

    th{
        
        font-size: 14px;
        padding: 5px;
        color: #999;

    
    }

    

`

export const ButtonStyled = styled.label`
    padding: 7px 10px;
    background: ${colors.buttonDark};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width:  ${props => props.width};

    &:hover{
        background: ${colors.buttonLight};
        cursor: pointer;
    }

    span{
        margin-left: 10px;
    }
`

export const InputStyled = styled.input`
    padding: 7px 10px;
    background: ${colors.buttonDark};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: ${colors.textColor};
    width: ${props => props.width};
    border-radius: 3px;
`

export const SelectStyled = styled.select`
    padding: 7px 10px;
    background: ${colors.buttonDark};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: ${colors.textColor};
    width: ${props => props.width};
    border-radius: 3px;
    min-width: 200px;
`

export const LabelStyled = styled.div`
   margin-bottom: 5px;
   margin-top: 15px;
`
