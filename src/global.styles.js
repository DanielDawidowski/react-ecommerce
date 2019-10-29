import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
        padding: 20px 60px;
        background-color: #F0F0C9;

        @media screen and (max-width: 800px){
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: black
    }

    * {
        box-sizing: border-box;
    }
`