import React from "react";
import "./Dashboard.css"
import iconPeopleOne from "../assets/Ellipse_10.png"
import iconPeopleTwo from "../assets/img_photo.png"
import iconRate from "../assets/Rate.png"
import prevIcon from "../assets/Vector.svg"
import nextIcon from "../assets/Vector-kanan.svg"


export default function Testimonial() {
    return (
        <>
            <section id="testimonials">
                <h2 className="pb-2 mt-5 pt-5 h-testimonial">Testimonial</h2>
                <p className="p-testimonial">
                    Berbagai review positif dari para pelanggan kami
                </p>

                <div id="carouselExample" className="carousel slide m-auto card-carousel mt-5">
                    <div className="carousel-inner">
                        <div className="carousel-item active ms-5">
                            <div className="col d-flex align-items-start align-items-center py-5 px-5 ">
                                <div
                                    className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                    <img src={iconPeopleOne} alt="" />
                                </div>
                                <div>
                                    <img src={iconRate} alt="" className="ms-2" />
                                    <p className="p-comment ms-2 mt-2">
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod”
                                    </p>
                                    <p className="p-user ms-2">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ms-5">
                        <div className="col d-flex align-items-start align-items-center py-5 px-5 ">
                            <div
                                className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                <img src={iconPeopleTwo} alt="" />
                            </div>
                            <div>
                                <img src={iconRate} alt="" className="ms-2" />
                                <p className="p-comment ms-2 mt-2">
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod”
                                </p>
                                <p className="p-user ms-2">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ms-5">
                        <div className="col d-flex align-items-start align-items-center py-5 px-5 ">
                            <div
                                className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                <img src={iconPeopleTwo} alt="" />
                            </div>
                            <div>
                                <img src={iconRate} alt="" className="ms-2" />
                                <p className="p-comment ms-2 mt-2">
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod”
                                </p>
                                <p className="p-user ms-2">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <img src={prevIcon} alt="" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <img src={nextIcon} alt="" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    )
}