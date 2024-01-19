import { StyledTestimonial} from "../../Components/Testimonial.style";
import SectionTitle from "../../Components/sectiontitle";
import FeedbackCards from "../feedbacks";


function TestimonialSection() {
    return (  
        <StyledTestimonial>
                <SectionTitle title="testimonials"></SectionTitle>
                <h2>What Our Customers Say</h2>
                <p>Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance</p>
                <FeedbackCards/>
        </StyledTestimonial>
    );
}

export default TestimonialSection;