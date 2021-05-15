import React from 'react'
import '../styles/footer.scss';
import { BiCopyright } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";



function Footer() {
    return (
        <div className="footer">

            <div className="first">

                <div className="left">
                    <div className="top">

                        <div className="side">
                            <div className="logo">EKO Gallery</div>
                        </div>

                        
                        <div className="top-right">

                            <div className="side">
                                <div className="option">Home</div>
                                <div className="option center">Exhibitions</div>
                                <div className="option">Galleries</div>
                            </div>

                            <div className="side">
                                <div className="option">Our Artists</div>
                                <div className="option center">Partnerships</div>
                            </div>
                            
                        </div>

                    

                    </div>

                

                </div>

                <div className="right">
                    <div className="icon">< FaInstagram /></div>
                    <div className="icon center">< FaTwitter /></div>
                    <div className="icon">< GrFacebookOption /></div>
                </div>

            </div>

 

            <div className="bottom">
                    <div className="icon">< BiCopyright /></div>
                    <div className="text">2020 EKO Gallery all rights reserved</div>
            </div>
            
        </div>
    )
}

export default Footer
