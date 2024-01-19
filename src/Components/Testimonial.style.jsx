import styled from "styled-components";

export const StyledTestimonial= styled.section`
    width: 1400px;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    margin: 100px 0;
    gap: 2em;


    .div-exp {
        display: flex;
        flex-direction: column;
        gap: 2em;
        width: 700px;
    }

    h2 {
        font-size: 48px;
        color: #2B2B2B;
        font-weight: 700;
    }

    p {
        font-size: 20px;
        font-weight: 400;
        color: #2B2B2B;
        
    }

    .btn-exp {
        background-color: #FFF;
        border: 3px solid #D5DDDD;
        width: 239px;
        height:76px;
        color: #2B2B2B;
        font-size: 22px;
        font-weight: 600;


    }

    .back-img {
        background-color: #E0F8F8;
        border-bottom-right-radius: 35px;
        border-top-left-radius: 35px;
        width: 660px;

    }
    
    img {
        width: 500px;
    }

`
