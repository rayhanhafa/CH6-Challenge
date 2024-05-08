import React from "react";
import "./Dashboard.css"
import imgFacebook from '../assets/icon_facebook.svg';
import imgInstagram from '../assets/icon_instagram.svg';
import imgTwitter from '../assets/icon_twitter.svg';
import imgMail from '../assets/icon_mail.svg';
import imgTwitch from '../assets/icon_twitch.svg';

export default function Footer() {
    return (
        <>
            <section id="footer">
                <div className="container">
                    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5">
                        <div className="col mb-3 ms-5">
                            <p className="p-section-1 mb-4 section-1">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                            <p className="p-section-1 mb-4">binarcarrental@gmail.com</p>
                            <p className="p-section-1 mb-4">081-233-334-808</p>
                        </div>
                        <div className="col mb-3 ms-5">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-4" ><a href="#our-service" className="nav-link p-section-2 p-0" style={{ textDecoration: "none", color: "black" }}>Our
                                    services</a></li>
                                <li className="nav-item mb-4" ><a href="#why-us" className="nav-link p-section-2 p-0" style={{ textDecoration: "none", color: "black" }}>Why Us</a></li>
                                <li className="nav-item mb-4" ><a href="#testimonials"
                                    className="nav-link p-section-2 p-0" style={{ textDecoration: "none", color: "black" }}>Testimonial</a></li>
                                <li className="nav-item mb-4" ><a href="#faq" className="nav-link p-section-2 p-0 " style={{ textDecoration: "none", color: "black" }}>FAQ</a></li>
                            </ul>
                        </div >
                        <div className="col mb-3 ms-5">
                            <p className="p-section-1">Connect with us</p>
                            <span>
                                <img src={imgFacebook} alt="" />
                                <img src={imgInstagram} alt="" className="ms-2" />
                                <img src={imgTwitter} alt="" className="ms-2" />
                                <img src={imgMail} alt="" className="ms-2" />
                                <img src={imgTwitch} alt="" className="ms-2" />
                            </span>
                        </div>
                        <div className="col mb-3 ms-5">
                            <p className="p-section-1">Copyright Binar 2022</p>
                            <div className="logo"></div>
                        </div>
                    </footer >
                </div >
            </section >
        </>
    )
}