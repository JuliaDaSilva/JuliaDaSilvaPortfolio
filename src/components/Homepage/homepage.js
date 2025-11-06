import './homepage.css';
import JuliaImage from '../../assets/juliaimage.png';

const Homepage = () => {
    return (
        <div>
             <div className="divider"></div>
            <div className="homepage-main">
                <div className="homepage-text">
                    <h3>Hello!</h3>
                    <h1>I'm Julia Da Silva</h1>
                    <h3>A Fourth Year Computer Science Student</h3>
                    <p>
                        Passionate about creating thoughtful digital experiences that combine
                        design, development, and innovation.
                    </p>
                    <a href="/DaSilva_Julia.pdf" download="DaSilva_Julia.pdf" className="download-btn">
                        Download CV
                    </a>
                </div>
                <div className="homepage-image">
                    <img src={JuliaImage} alt="Julia Da Silva" />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
