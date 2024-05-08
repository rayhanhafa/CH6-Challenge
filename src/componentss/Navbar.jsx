import React from "react";
import "./Dashboard.css"

export default function Navbar() {
    return (
        <>
            <div className="hero">
                <nav className="navbar navbar-expand-lg navbar-light position-fixed w-100" aria-label="Offcanvas navbar large">
                    <div className="container">
                        <div className="logo"></div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-light" tabIndex="-1" id="offcanvasNavbar2"
                            aria-labelledby="offcanvasNavbar2Label">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title ms-3 mt-3" id="offcanvasNavbar2Label">BCR</h5>
                                <button type="button" className="btn-close btn-close-black me-3" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item mx-3 my-2">
                                        <a className="nav-link" aria-current="page" href="#our-service">Our Services</a>
                                    </li>
                                    <li className="nav-item mx-3 my-2">
                                        <a className="nav-link" href="#why-us">Why Us</a>
                                    </li>
                                    <li className="nav-item mx-3 my-2">
                                        <a className="nav-link" href="#testimonials">Testimony</a>
                                    </li>
                                    <li className="nav-item mx-3 my-2">
                                        <a className="nav-link" href="#faq">FAQ</a>
                                    </li>
                                    <button type="button" className="btn-register mx-3 my-2">Register</button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}