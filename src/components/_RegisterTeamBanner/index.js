import React from 'react'
import { BannerBackground, BannerContent, ContentWrapper } from '../../styles/components/registerTeamBanner'
import { ButtonStyled } from '../../styles/main/index.styled'

export default function index() {
    return (
        <ContentWrapper>
           
            <BannerContent>
                ZAPISZ SIĘ JUŻ DZISIAJ!
                <span>
                    Zapisy dla drużyn w sezonie alpha zostały otwarte!
                </span>
                <ButtonStyled width='120px'>ZAPISZ TEAM</ButtonStyled>
            </BannerContent>
        </ContentWrapper>
    )
}
