import React from 'react'
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className=" row">
                    <div className="footer-col">
                        <h4 className='footer-heading'>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">visit website</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className='footer-heading'>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">order status</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className='footer-heading'>online shop</h4>
                        <ul>
                            <li><a href="#">download</a></li>
                            <li><a href="#">changelog</a></li>
                            <li><a href="#">github</a></li>
                            <li><a href="#">all version</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className='footer-heading'>follow us</h4>
                        <div className="social-links">

                            <a href="#" className='social-icons'><FaFacebookF /></a>
                            <a href="#" className='social-icons'><FaXTwitter /></a>
                            <a href="#" className='social-icons'><FaInstagram /></a>
                            <a href="#" className='social-icons'><GrLinkedinOption /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer