import React from "react";
import "./Dashboard.css"
import Navbar from "./Navbar";
import Jumrotun from "./Jumrotun";
import OurService from "./OurService";
import WhyUs from "./WhyUs";
import Testimonial from "./Testimonial";
import Banner from "./Banner";
import Faq from "./Faq";
import Footer from "./Footer";

export default function Dashboard() {
    return (
        <>
            <Navbar></Navbar>
            <Jumrotun></Jumrotun>
            <OurService></OurService>
            <WhyUs></WhyUs>
            <Testimonial></Testimonial>
            <Banner></Banner>
            <Faq></Faq>
            <Footer></Footer>
        </>
    )
}