import React, { useEffect, useState } from 'react'
import { BannerClockBox, BannerContent, BannerNewsBox, BannerNewsBoxContent, BannerNewsBoxHeader, BannerNewsBoxWprapper, BannerWrapper, TimerBox, TimerBoxLower, TimerBoxSingleNumber, TimerBoxSingleNumberWrapper, TimerBoxUpper } from '../../styles/components/banner'


export default function Index() {

    const [timer, settimer] = useState({timerDays : '', timerHours : '', timerMinutes : '', timerSeconds : ''})
 
    const justStart = () => {
        var countDownDate = new Date("Feb 25, 2022 16:37:52").getTime();

        setInterval(function() {
        var now = new Date().getTime();
        var timeleft = countDownDate - now;

        let days = Math.floor(timeleft / (1000 * 60 * 60 * 24))
        let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((timeleft % (1000 * 60)) / 1000)
        
        settimer({...timer, timerDays: days, timerHours: hours, timerMinutes: minutes, timerSeconds: seconds})

       
      
            
      console.log('TICK');
        }, 1000)
    
    }

    useEffect(() => {
        justStart()
    }, [])
  

    return (
        <BannerWrapper>
            <BannerContent>
            <BannerClockBox >
                <TimerBox>
                    <TimerBoxUpper>
                        <TimerBoxSingleNumberWrapper>
                            <TimerBoxSingleNumber>{timer.timerDays}  </TimerBoxSingleNumber>
                            <TimerBoxSingleNumber>{timer.timerHours < 10? '0'+ timer.timerHours + ' : ' : timer.timerHours + ' : '}  </TimerBoxSingleNumber>
                            <TimerBoxSingleNumber>{timer.timerMinutes < 10? '0'+ timer.timerMinutes + ' : ' : timer.timerMinutes + ' : '}  </TimerBoxSingleNumber>
                            <TimerBoxSingleNumber>{timer.timerSeconds < 10? '0'+ timer.timerSeconds  : timer.timerSeconds }  </TimerBoxSingleNumber>
                            
                        </TimerBoxSingleNumberWrapper>

                    </TimerBoxUpper>
                    <TimerBoxLower>
                        <TimerBoxSingleNumber>DAYS</TimerBoxSingleNumber>
                        <TimerBoxSingleNumber>HOURS</TimerBoxSingleNumber>
                        <TimerBoxSingleNumber>MINUTES</TimerBoxSingleNumber>
                        <TimerBoxSingleNumber>SECONDS</TimerBoxSingleNumber>
                    </TimerBoxLower>
                </TimerBox>                
            </BannerClockBox>
            <BannerNewsBoxWprapper >
                <BannerNewsBox>
                    <BannerNewsBoxHeader>
                    NOWE INFORMACJE
                    </BannerNewsBoxHeader>
                    <BannerNewsBoxContent>
                    START SEZONU ALPHA!
                    <span>
                        Sezon oznaczony jako 'ALPHA' oznacza sezon testowy w którym zawodnicy mogą przystąpić do rozgrywek bez wymagań ligowych.<br/>
                        Przeznaczony on jest to testowania oprogramowania jednak można w nim zdobyć unikalne nagrody jak osiągnięcia konta (ALPHA VETERAN) lub punkty premium. 
                    </span>
            
                    </BannerNewsBoxContent>
                </BannerNewsBox>
                
                
                  </BannerNewsBoxWprapper>

            </BannerContent>
        </BannerWrapper>
    )
}
