import styled from "styled-components";


export const StyledFeedback = styled.div`
    width:1400px;
    display: flex;
    justify-content: space-between;

    .back-img {
        display: flex;
        width: 400px;
        flex-direction: column;
        background-color: #FFF;
        border-bottom-right-radius: 35px;
        border-top-left-radius: 35px;
        padding: 40px;
        gap: 2em;
        border: 3px solid #D5DDDD ;
    }
    .perfil {
        display: flex;
    }

    .perfil-img {
        width: 75px;
    }

    .perfil-desc>p {
    color: #B0B0B0;
    }
    .perfil-desc>h4 {
        font-size: 24px;
    color: #1E1E1E;
    }

    .fbmsg {
        margin: 0 ;
    }
    .quot {
        display: flex;
        align-self: end;
        width: 55px;
    }




`