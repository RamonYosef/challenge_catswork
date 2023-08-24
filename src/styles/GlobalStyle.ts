import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`


*
{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html, body
{
    height: 100%;
}

*, button, input
{
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
    
}

:root
{
    --secundary: #86C9FD;
    --buttons: #FC473D;
    --white: white;
    --box: #4F4F4F;
    --boxLocal: #3F3F3F;
    --diferenciaRed: #FDA39E;
    --diferenciaBlue: #86C9FD;
    --border: #dde2e5;
}

`;