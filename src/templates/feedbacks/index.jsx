import { StyledFeedback } from '../../Components/feedback.style';
import feedimg1 from '../../assets/feedimg1.png';
import feedimg2 from '../../assets/feedimg2.png';
import feedimg3 from '../../assets/feedimg3.png';
import quot from '../../assets/quot.png';

function FeedbackCards() {

    const feedbacks = [
        {
            fbimg: feedimg1,
            name: "Grace Turner",
            job: "Director",
            message: "Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community"
        },
        {
            fbimg: feedimg2,
            name: "Linda Carter",
            job: "Analyst",
            message: "Financial planning and investment advice I received from this team completely transformed my future. I couldn't be happier with the results."
        },
        {
            fbimg: feedimg3,
            name: "Alex Walker",
            job: "Attorney",
            message: "Estate planning is crucial, and they made the process seamless and stress-free. I can rest assured knowing family's future is secure"
        }
    ];

    return (
        <StyledFeedback>
            {feedbacks.map((feedback, index) => (
                <div key={index} className="back-img">
                    <div className="perfil">
                        <img className='perfil-img' src={feedback.fbimg} alt="" />
                        <div className="perfil-desc">
                            <h4>{feedback.name}</h4>
                            <p>{feedback.job}</p>
                        </div>
                    </div>
                    <p className='fbmsg' >{feedback.message}</p>
                    <img className='quot' src={quot} alt="" />
                </div>
            ))}
        </StyledFeedback>
    );
}

export default FeedbackCards;
