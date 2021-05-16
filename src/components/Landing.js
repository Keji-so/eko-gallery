import React, {useState} from 'react'
import '../styles/landing.scss';
import { BiChevronRight } from "react-icons/bi";

const artPaint = [
    {
        src: "./images/pic1.png"
    },
    {
        src: "./images/pic2.png"
    },
    {
        src: "./images/pic3.png"
    },
    {
        src: "./images/pic4.png"
    }
]

function Landing() {

const [drop, setDrop] = useState(false);

const handleDrop = () => {
    setDrop(!drop);
}


    return (
        <div className="landing">

            <div className={drop ? "active" : "dropdown"}>

                <div className="close" onClick={handleDrop}>
                        <div className="line first"></div>
                        <div className="line second"></div>
                </div>

                <div className="content">
                    <div className="links">Home</div>
                    <div className="links">Exhibitions</div>
                    <div className="links">Our Artists</div>
                    <div className="links">Galleries</div>
                    <div className="links">Partnerships</div>
                </div>
                
            </div>
            
            <div className="left">
                <div className="nav">
                    <div className="eko-logo">EKO Gallery</div>
                    <div className="hamburger" onClick={handleDrop}>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className=" welcome">Welcome to the Eko art gallery, we display some of the best artworks in Nigeria</div>
                <div className="landing-btn">
                    <div className="visit">Schedule a visit</div>
                    <div className="arrow">< BiChevronRight /></div>
                </div>

                <div className="mobile-img">
                    <div className="img-container">
                        {artPaint.map(({src}, i) => (
                            <img className="image" key={i} src={src} alt=""/>
                        ))}
                    </div>
                </div>
            </div>

            <div className="right">

                <div className="top">
                    <ul>
                        <li>Home</li>
                        <li>Exhibitions</li>
                        <li>Our Artists</li>
                        <li>Galleries</li>
                        <li>Partnerships</li>
                    </ul>
                </div>

                <div className="bottom">
                        <div className="pictures1">
                            <img className="pic1" src="./images/pic1.png" alt=""/>
                        </div>
                        <div className="pictures2">
                            <img className="pic2" src="./images/pic2.png" alt=""/>
                        </div>
                        <div className="pictures3">
                            <img className="pic3" src="./images/pic3.png" alt=""/>
                        </div>
                        <div className="pictures4">
                            <img className="pic4" src="./images/pic4.png" alt=""/>
                        </div>
                   

                   
                </div>

            </div>

        </div>
    )
}

export default Landing
