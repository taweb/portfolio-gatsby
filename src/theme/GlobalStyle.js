import { createGlobalStyle } from 'styled-components';
import { colors, fontSizes, breakPoints } from './Variables.js';

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        font-family: inherit;
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

    strong { 
        font-weight: bold;
    }

    h1 {
        font-size: ${fontSizes.xlarge};
        margin-bottom: 1.5rem;
    }

    h2 {
        font-size: ${fontSizes.large};
        margin-bottom: 1rem;
    }

    h3 {
        font-size: ${fontSizes.medium};
    }

    p {
        font-size: ${fontSizes.normal};
        margin-bottom: 1rem;
    }

    input, textarea {
        font-size: ${fontSizes.normal};
    }

    ul, ol {
        list-style-type: none;
    }

    a {
        color: ${colors.black};
        text-decoration: none;
        background-image: linear-gradient(${colors.black}, ${colors.black}), linear-gradient(${colors.grey}, ${colors.grey});
        background-position: 0% 100%, 0% 100%;
        background-repeat: no-repeat, no-repeat;
        background-size: 100% 2px, 100% 0px;
        @media (${breakPoints.desktop}) {
            transition: background-size .3s;
            &:hover {
                background-size: 100% 2px, 100% 100%;
            }
        }
    }
`