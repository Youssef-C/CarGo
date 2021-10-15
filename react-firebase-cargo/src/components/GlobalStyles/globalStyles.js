import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background: teal;
        color: white;
    }

    button {
        color: white;
        background-color: rgba(67, 69, 108, 1);
        border-radius: 32px;
        border: none;
        position: absolute;
        width: 250px;
        height: 50px;
        left: 64px;
        top: 459px;
    }
    `;

export default GlobalStyle;