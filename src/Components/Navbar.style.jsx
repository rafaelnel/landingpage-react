import styled from "styled-components";

export const StyledNavbar = styled.menu`
    width: 80vw;
    height: 100px;
    display: flex;
    color: #2B2B2B;
    justify-content: space-between;
    align-items: center;
    

    ul {
        display: flex;
        justify-content:space-between;
        list-style: none;
        width: 400px;
        font-size: 1.2em;
        font-weight: 600;

    }

    li {
        display: flex;
        align-items: center;
        color: #2B2B2B;
    }

    a{
        color: #2B2B2B;
        text-decoration: none;
    }
    .Login {
        color: #2B2B2B;
        border: none;
        margin-right: 2em;
        font-size: 1.2em;
        text-decoration: underline;
        font-weight: 600;
        background-color: #FFF;
    }

`
