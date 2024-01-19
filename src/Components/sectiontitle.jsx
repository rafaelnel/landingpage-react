import styled from "styled-components";

function SectionTitle(props) {
    return ( 
        <StyledTitle>
            <h3>{props.title}</h3>
            <hr/>

        </StyledTitle>
     );
}

export default SectionTitle;


export const StyledTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;

    h3 {
        color: #008080;
        background-color: #E0F8F8;
        padding: 10px;
    }
    hr {
        margin-left: 1em;
        width: 96px;
        border-top: 2px solid #008080;
    }



`