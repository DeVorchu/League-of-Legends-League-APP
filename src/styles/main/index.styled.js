import styled, { createGlobalStyle } from 'styled-components'
import * as colors from '../colors'


export const MainStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Play&display=swap');

    body {    
        background: ${colors.backgroundDark};
        color: ${colors.textColor};
        margin: 0;
        font-family: 'Play', sans-serif;
    }

    

`

export const ButtonStyled = styled.div`
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
