import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;

    li{
        display: flex;
        align-items: center;
        border: solid white 1px;
        padding: 20px;
        border-radius: 10px
    }

    li:not(:last-child){
        margin-bottom: 10px;
    }

    button{
        background-color: #fff;
        border-radius: 20px;
        border: none;
        background-color: darkred;
        color: white;
        cursor: pointer;
        margin-left: auto;
    }
`