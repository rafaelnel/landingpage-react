import { StyledQualities } from '../../Components/qualities.style';
import q1 from '../../assets/q1.png';
import q2 from '../../assets/q2.png';
import q3 from '../../assets/q3.png';

function QualitiesCards() {

    const qualities = [
        {
            qimg: q1,
            title: "Expert Guidance",
            pg: "Rely on seasoned professionals for tailored financial advice and strategic planning aligned with your unique goals",
        },
        {
            qimg: q2,
            title: "Risk Management",
            pg: "We expertly handle and proactively mitigate financial risks, ensuring the safeguard of assets and overall stability",
        },
        {
            qimg: q3,
            title: "Customized Solutions",
            pg: "Receive and Benefit from with financial solutions that tailored to your unique financial challenges and aspirations",
        }
    ];

    return (
        <StyledQualities>
            {qualities.map((quality, index) => (
                <div key={index} className="">
                    <img src={quality.qimg} alt="" />
                    <h4>{quality.title}</h4>
                    <p>{quality.pg}</p>
                    <h5>Read more</h5>

                </div>
            ))}
        </StyledQualities>
    );
}

export default QualitiesCards;
