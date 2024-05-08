import React from "react";
import "./Dashboard.css"
import imgService from "../assets/img_service.png"
import imgIconService from "../assets/Group_53.svg"

export default function OurService() {
    return (
        <>
            <section id="our-service">
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row  align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6 mx-auto">
                            <img src={imgService} className="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes"
                                loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className=" h-our-service">Best Car Rental for any kind of trip in
                                (Lokasimu)!</h1>
                            <p className="p-our-service mt-3">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
                                murah
                                dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan
                                wisata, bisnis, wedding, meeting, dll.</p>

                            <p className="p-our-service-2">
                                <img src={imgIconService} alt="" className="me-2" />
                                Sewa Mobil Dengan Supir di Bali 12 Jam
                            </p>
                            <p className="p-our-service-2">
                                <img src={imgIconService} alt="" className="me-2" />
                                Sewa Mobil Lepas Kunci di Bali 24 Jam
                            </p>
                            <p className="p-our-service-2">
                                <img src={imgIconService} alt="" className="me-2" />
                                Sewa Mobil Jangka Panjang Bulanan
                            </p>
                            <p className="p-our-service-2">
                                <img src={imgIconService} alt="" className="me-2" />
                                Gratis Antar - Jemput Mobil di Bandara
                            </p>
                            <p className="p-our-service-2">
                                <img src={imgIconService} alt="" className="me-2" />
                                Layanan Airport Transfer / Drop In Out
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}