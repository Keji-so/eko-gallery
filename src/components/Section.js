import React from 'react'
import '../styles/section.scss';
import { BiChevronRight } from "react-icons/bi";

function Section() {
    return (
        <div class="section">

            <div className="artwork">

                <div className="section-nav">
                     <div className="heading">Artworks on display</div>
                     <div className="all">
                        <div className="all-text">All artworks</div>
                        <div className="icon">< BiChevronRight /></div>
                     </div>
                </div>

                <div className="images">

                    <div className="card">
                        <div className="picture">
                            <img src="./images/pic1.png" alt="" />
                        </div>
                        
                        <div className="title">Mindless</div>
                        <div className="author">by Adrianna Geo</div>
                    </div>
                    <div className="card middle">
                         <div className="picture">
                            <img src="./images/pic5.png" alt="" />
                        </div>
                        <div className="title">The Burning Man</div>
                        <div className="author">by Richard Chima</div>
                    </div>
                    <div className="card">
                        <div className="picture">
                            <img src="./images/pic4.png" alt="" />
                        </div>
                        <div className="title">Under Pressure</div>
                        <div className="author">by Richard Chima</div>
                    </div>

                    <div className="all-down">
                        <div className="all-text">All artworks</div>
                        <div className="icon">< BiChevronRight /></div>
                     </div>

                </div>
            </div>

            <div className="artist">

                 <div className="left">
                    <div className="heading">Our Artist Of The Month</div>
                    <div className="author">Richard Chima</div>
                    <div className="description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                 </div>

                 <div className="right">
                    <div className="image-div">
                        <img src="./images/pic6.png" alt="" />
                    </div>
                 </div>
            </div>
            
        </div>
    )
}

export default Section
