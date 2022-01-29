import styled from 'styled-components'
import * as colors from '../../colors.js'

export const NavBarWrapper = styled.div`    
    width: 70vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const NavLogo = styled.div`    
    position: relative;
    width: 15vw;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colors.BackgroundLight};
    overflow: hidden;

    &::before{
        position: absolute;
        content: '';
        top: 0;
        right: -10px;
        width: 50px;
        height: 100px;
        background: ${colors.backgroundDark};
        transform: rotate(45deg)
    }
`

export const NavLogoContainer = styled.div`    
    min-width: 150px;
    height: 3vh;
    display: flex;
    justify-content: center;
    align-items:center;
    border-right: 1px solid ${colors.iconsDark}; 
    
`
export const NavLogoIconsContainer = styled.div`    
    min-width: 60px;
    height: 3vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 50px;
    color: ${colors.iconsDark};
`
export const NavLinks = styled.div`    
    display: flex;
    justify-content: flex-end;
    min-width: 50vw;
`
export const LinkItems = styled.div`    
    margin-left: 40px;
    height: 6vh;
    display: flex;
    align-items: center;

    &:hover{
        a{
            color: ${colors.buttonLight}
        }
        
    }
    
`


