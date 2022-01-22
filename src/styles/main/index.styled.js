import { createGlobalStyle } from 'styled-components'
import * as colors from '../colors'

export const MainStyle = createGlobalStyle`
    body {    
        background: ${colors.backgroundDark};
        color: ${colors.textColor};
        margin: 0;
    }

`