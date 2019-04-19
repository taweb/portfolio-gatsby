import { createGlobalStyle } from 'styled-components';
import { colors } from './Variables.js';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Kodchasan:400,700');
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Kodchasan, sans-serif;
        /* font weight */
        /* font size */
        color: ${colors.black}
    }

    a {
        text-decoration: none;
    }
`