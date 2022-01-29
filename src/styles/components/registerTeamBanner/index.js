import * as colors  from '../../colors.js'
import styled from 'styled-components'
import bg from '../../../assets/bgrr2.png'

export const ContentWrapper = styled.div`   
    height: 25vh;
    display: flex;
    background: url(${bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: right;
    position: relative;
    overflow: hidden;

    &::before{
        position: absolute;
        content: '';
        width: 600px;
        height: 350px;
        background: ${colors.BackgroundLight};
        transform: rotate(-45deg);
        left: -100px;
        top: -120px;
    }
`
export const BannerContent = styled.div`   
    position: absolute;
    content: '';
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    font-size: 22px;
    padding: 40px 30px;

    span{
        font-size: 12px;
        margin: 10px 0 10px 0;
    }

`