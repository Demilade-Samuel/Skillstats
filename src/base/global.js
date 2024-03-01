import { createGlobalStyle } from "styled-components";

const global = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html {
        -webkit-tap-highlight-color: transparent;
        font-size: 62.5%;
    }
    body {
        user-select: none;
        font-size: 2rem;
        font-family: ${({ theme }) => theme.font.generalSans};
        background-color: ${({ theme }) => theme.colors.bg};
        color: white;
    }
    ::-webkit-scrollbar {

    }
    ::-webkit-scrollbar-track {

    }
    ::-webkit-scrollbar-thumb {

    }
    ::-webkit-scrollbar-thumb:hover {

    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
`;
export default global;
