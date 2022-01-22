import { createGlobalStyle } from 'styled-components'
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