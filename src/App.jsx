import './App.css'
import { StyledBody } from './Components/body.style';
import Navbar from './templates/Navbar';
import Main from './templates/Main';
import ExperinceSection from './templates/ExperinceSection';
import ServiceSection from './templates/ServiceSection';
import TestimonialSection from './templates/TestimonialSection';
import brands from './assets/Maskgroup.png';
import TeamSection from './templates/TeamSection';
import GetStart from './templates/GetStart';

// import { Calendar } from 'rsuite';

function App() {
    return(
        <StyledBody>
            <Navbar/>
            <Main/>
            <img className='brands' src={brands} />
            <ExperinceSection/>
            <ServiceSection/>
            <TestimonialSection/>
            <TeamSection/>
            <GetStart/>


        </StyledBody>
    )
}

export default App;
