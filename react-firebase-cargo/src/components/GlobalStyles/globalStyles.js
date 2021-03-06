import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        font-family: 'Comfortaa', cursive;
    }

    body{
        background: white;
        padding: 0px;
    }

    button {
        font-family: 'Comfortaa', cursive;
        font-size: 18px;
        background-color: rgba(67, 69, 108, 1);
        border-radius: 32px;
        border: none;
        width: 250px;
        height: 50px;
        left: 64px;
        top: 459px;
        transition: ease-in-out, 1ms;
        margin: 8px;
    }

    button:hover {
        background-color: rgba(104, 107, 161, 1);
        transition: ease-ease-in-out, 1ms;
    }

    link {
        //Gonna have to style the navbar separetly
        color: white;
        font-size: 32px;
    }
    
    input {
        font-family: 'Comfortaa', cursive;
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