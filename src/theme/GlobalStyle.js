import { createGlobalStyle } from 'styled-components';
import { colors } from './Variables.js';



export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Poppins, sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: ${colors.black};
        @font-face {
            font-family: 'Poppins, sans-serif';
            src: url('https://fonts.googleapis.com/css?family=Poppins:400,700');
        }
        font-size: 16px;
        font-weight: 400;
    }

    a {
        text-decoration: none;
        :visited {
            color: ${colors.black}
        }
    }
`