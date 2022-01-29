import styled from 'styled-components'
import wallBg from '../../../assets/bgrr.png'
import * as colors from '../../colors.js'


export const BannerWrapper = styled.div`    
    margin-top: 20px;
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: center;
`

export const BannerContent = styled.div`    
    width: 65vw;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('${wallBg}');
    background-size: cover;
    background-position-y: -320px;
    filter: brightness(.7);
    position: relative;
`

export const TimerBox = styled.div`    
    font-size: 30px;
    color: ${colors.buttonLight};
    background: rgba(0,0,0, .7);
    width: 260px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 5px;
`

export const TimerBoxSingleNumberWrapper = styled.div`       

    display: flex;
 
`

export const TimerBoxSingleNumber = styled.div`    
    
    width: 58px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TimerBoxUpper = styled.div`    
    font-size: 30px;
    color: ${colors.buttonLight};
`

export const TimerBoxLower = styled.div`    
    font-size: 10px;
    color : white;
    display: flex;
`


export const BannerClockBox = styled.div`    
    
    width: 50%;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BannerClock = styled.div`    
    
    width: 50%;
    height: 25vh;
    display: flex;
    justify-content: flex-start;
`



export const BannerNewsBoxWprapper = styled.div`    
    width: 50%;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`

export const BannerNewsBox = styled.div`  
    padding: 25px 20px;
    display: flex;
    flex-direction: column;    
    background: rgba(0,0,0, .7);
    
`
export const BannerNewsBoxHeader = styled.div`    
    
    margin-left: 60px;
    margin-bottom: 20px;
    color: ${colors.buttonLight};
    position: relative;
    

    &::before, ::after{
        position: absolute;
        content: '';
        width: 50px;
        height: 10px;
        border-top: 1px solid ${colors.buttonLight};
        top: 7px;
        left: -60px;
    }

    &::after{
        left: 150px;
    }
    
`

export const BannerNewsBoxContent = styled.div`    

    width: 400px;
    font-size: 26px;
    display: flex;

    flex-direction: column;
    span{
        margin-top: 20px;
        font-size: 12px;
    }
`

