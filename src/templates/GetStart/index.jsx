import { StyledButton } from "../../Components/button.style";
import { StyledStart } from "../../Components/start.style";
import startimg from '../../assets/getstart.png';

function GetStart() {
    return (  
        <StyledStart>
            <div>
                <div className="title">
                    <h3>START NOW</h3>
                    <hr/>
                </div>
                <h2>
                Get Start For Free No Credit Card Required   
                </h2>
                <div className="input">
                    <input type="text" />
                    <StyledButton>Get Started</StyledButton>
                </div>
                <h5>Want to contact our team and book a call? Try it now</h5>
            </div>
            <img src={startimg} alt="" />
        
        </StyledStart>
    );
}

export default GetStart;