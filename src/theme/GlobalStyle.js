import { createGlobalStyle } from 'styled-components';
import { colors, fontSizes, breakPoints } from './Variables.js';

const line = () => `
    position: absolute;
    top: 100%;
    width: 100%;
    left: 0;
    height: 2px;
    content: '';
    background-color: ${colors.black};
`

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

    h1 {
        font-size: ${fontSizes.xlarge};
        margin-bottom: 1rem;
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
    }

    ul, ol {
        list-style-type: none;
    }

    a {
        color: ${colors.black};
        text-decoration: none;
        font-size: inherit;
        position: relative;
        &::before {
            ${line};
        }
        @media (${breakPoints.desktop}) {
            &::before, &::after {
                transform: scale(0.85);
                transition: transform 0.3s;
            }
            &::after {
                ${line};
                opacity: 0;
                transition: transform 0.3s, top 0.3s, opacity 0.3s;
            }
            &:hover::before,
            &:hover::after {
                transform: scale(1.05);
            }
            &:hover::after {
                opacity: 1;
                top: 0%;
            }
        }
    }
`