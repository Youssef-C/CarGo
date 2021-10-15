import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background: white;
        padding: 20px;
    }

    button {
        color: white;
        background-color: rgba(67, 69, 108, 1);
        border-radius: 32px;
        border: none;
        width: 250px;
        height: 50px;
        left: 64px;
        top: 459px;
    }

    input {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        border: 2px solid rgba(67, 69, 108, 1);
        border-radius: 32px;
        padding: 2px 12px;
        margin: 10px;
        width: 300px;
        height: 46px;
        left: 38px;
        top: 219px;
    }
    `;

export default GlobalStyle;