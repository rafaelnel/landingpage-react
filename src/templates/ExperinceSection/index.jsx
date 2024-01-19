import { StyledExperince } from "../../Components/Experince.style";
import finance from '../../assets/finance.png';
import SectionTitle from '../../Components/sectiontitle';


function ExperinceSection() {
    return (  
        <StyledExperince>
            <div className='div-exp'>
                <SectionTitle title="OUR EXPERTISE"/>
                <h2>Transforming Finances With Strategic Wealth Management</h2>
                <p>Guiding You on Your Global Financial Success Journey Through Customized & Personalized Financial Consulting Services. Achieve Your Goals with Data-Driven Expertise and Secure Your Financial Future, Successfully Navigating the Ever-Changing Finance </p>
                <p>We are Committed to Providing You with Expert Guidance, Proven Strategies & Personalized Approach to Ensure Financial Prosperity</p>
                <button className="btn-exp">Explore Services</button>
            </div>
            <div>
                <img className="back-img" src={finance} alt="" /> 
            </div>

        </StyledExperince>
    );
}

export default ExperinceSection;