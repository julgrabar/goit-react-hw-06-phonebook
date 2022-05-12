import styled from "styled-components";
import { Form } from "formik";

export const StyledForm = styled(Form)`
    border: solid 2px lightgray;
    border-radius: 15px;
    width: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;

    label{
        text-align: center;
    }

    button{
        width: 100px;
        padding: 5px 10px;
        border: none;
        border-radius: 15px;
        background-color: #ffffff;
        cursor: pointer;
        margin-top: 15px;

    }

`