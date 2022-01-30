import React from 'react'
import teamAvatar from '../../assets/vleague.png'
import { UpcommingHeader, UpcommingTeamBox, UpcommingTeamBoxMid, UppcomingMatchesWrapper } from '../../styles/components/upcommingMatches'

export default function index() {
    return (
        <UppcomingMatchesWrapper>
            <UpcommingHeader>
                NASTĘPNY MECZ
                <span> 22.02.2022 | 12:20</span> 
            </UpcommingHeader>
            <UpcommingTeamBox>
                <UpcommingTeamBoxMid teamAvatar={teamAvatar}/>
            </UpcommingTeamBox>
            
        </UppcomingMatchesWrapper>
    )
}
