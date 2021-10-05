import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 60vw;
    flex-direction: column;

    div {
        display: flex;
        width: 100%;
        height: 20vh;
        justify-content: space-evenly;
        border: 2px solid cadetblue;
        border-radius: 8px;
        padding: 10px;
        margin-bottom: 15px;
    }

    p{
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        border: 2px solid fuchsia;
        padding: 10px;
        font-family: sans-serif;

        button {
            margin-top: 10px; 
        }
    }
`;
