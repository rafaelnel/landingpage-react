import { StyledService } from "../../Components/Service.style";
import service from '../../assets/service.png';
import servicegrp from '../../assets/servicegroup.png';
import SectionTitle from '../../Components/sectiontitle';


function ServiceSection() {
    return (  
        <StyledService>
            <div>
                <img className="back-img" src={service} alt="" /> 
            </div>
            <div className='div-exp'>
                <SectionTitle title="OUR SERVICES"/>
                <h2>Our Services Can Help You Grow Your Investments and Wealth</h2>
                <p>Embark on a Journey to Unlock a World of Financial Opportunities, Grow Your Investment with Our Comprehensive and Expert Services</p>
                <img src={servicegrp} alt="" />
                <button className="btn-exp">Explore Services</button>
            </div>

        </StyledService>
    );
}

export default ServiceSection;