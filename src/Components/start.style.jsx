import styled from "styled-components";

export const StyledStart = styled.div`
    display: flex;
    width: 1400px;
    background-color: #008080;
    border-bottom-right-radius: 35px;
    border-top-left-radius: 35px;
    padding: 75px;
    margin: 100px 0;
    gap: 2em;

    >div {
        display: flex;
        flex-direction: column;
        gap: 3em;
    }
    

    .title {
        display: flex;
        align-items: center;

    }

    h3 {
        color: #2CDFD5;
    }
    hr {
        margin-left: 1em;
        width: 96px;
        border-top: 2px solid #2CDFD5;
    }

    h2 {
        color: #FFF;
        font-size: 48px;
    }

    img {
        width: 1000px;
    }

    .input {
        display: flex;
        >input{
            width: 300px;
            height: 60px;
        }
        >button {
            background-color:#20CFC6 ;
        }
    }

    h5 {
        font-size: 20px;
        font-weight: 400;
    }

`

