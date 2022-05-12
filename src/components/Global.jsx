import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000066;
        color: #ffffff
    }

    input{
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
    }

    .filter{
        width: 100%;
    }
`