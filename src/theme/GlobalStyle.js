import { createGlobalStyle } from 'styled-components';
import { colors } from './Variables.js';



export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: Poppins, sans-serif;
        font-weight: 400;
        color: ${colors.black};
        @font-face {
            font-family: 'Poppins, sans-serif';
            src: url('https://fonts.googleapis.com/css?family=Poppins:400,700');
        }
        font-weight: 400;
    }

    ul, ol {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }
`