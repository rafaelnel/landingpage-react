import {StyledButton} from '../../Components/button.style'
import {StyledMain} from '../../Components/Main.style'
import Mainimg from '../../assets/Mainimage.png';

function Main() {
    return (
    <StyledMain>
        <div className='maincont'>
            <h1>Navigating the Global financial landscape</h1>
            <p>Empowering Your Journey to Global Financial Success Through Customized and Personalized Financial Consulting for Every Client</p>
            <StyledButton>Get Started</StyledButton>
        </div>
    
        <img src={Mainimg} alt="" />
        
    </StyledMain > 
    );
}

export default Main;