import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background: white;
        padding: 20px;
    }

    button {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: white;
        background-color: rgba(67, 69, 108, 1);
        border-radius: 32px;
        border: none;
        width: 250px;
        height: 50px;
        left: 64px;
        top: 459px;
        transition: ease-ease-in-out, 1ms;
        margin: 8px;

        @media (max-width: 640px) {
            width: 100px;
            height: 50px;
            left: 64px;
            top: 459px;
            margin: 0px;
            font-size: 18px;
        }
    }

    button:hover {
        background-color: rgba(104, 107, 161, 1);
        transition: ease-ease-in-out, 1ms;
    }

    link {
        //Gonna have to style the navbar separetly
        color: red;
        font-size: 32px;
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