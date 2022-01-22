import styled from 'styled-components'
import * as colors from '../colors'

export const NavBarWrapper = styled.div`    
    width: 65vw;
    height: 6vh;
    background: ${colors.BackgroundLight};
    display: flex;
    align-items: center;
    margin-top: 15px;
    border-radius: 5px;
`

export const NavItem = styled.div`    
    display: flex;
    justify-content: center;
    margin-left: 25px;

    span{margin-left: 5px;}

    &:hover{
        cursor: pointer;
        color: ${colors.hoverLink};
    }
`

export const NavItemSpacer = styled.div`    
    width: 200px;
`