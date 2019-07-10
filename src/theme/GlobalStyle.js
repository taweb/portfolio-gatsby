import { createGlobalStyle } from 'styled-components';
import { colors } from './Variables.js';



export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        font-weight: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Source Code Pro', monospace;
        font-weight: 400;
        color: ${colors.black};
        @font-face {
            font-family: 'Source Code Pro', monospace;
            src: url('https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700');
        }
        height: 100%;
        box-sizing: border-box;
    }

    ul, ol {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }
`