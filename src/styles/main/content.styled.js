import styled from 'styled-components'
import * as colors from '../colors'

export const ContentWrapper = styled.div`    
    width: 65vw;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 15px;
    border-radius: 5px;
`

export const ContentLeft = styled.div`    
    width: 43vw;
    background: ${colors.BackgroundLight};
    display: flex;
    justify-content: left;
    flex-direction: column;

`

export const ContentRight= styled.div`    
    width: 20vw;
    background: ${colors.BackgroundLight};
    display: flex;
    justify-content: left;
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: column;

`

