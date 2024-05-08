import React from "react";
import "./Dashboard.css"
import imgCar from "../assets/img_car.png"


export default function Jumrotun() {
    return (
        <>
            <div className="hero">
                <section id="hero">
                    <div className="container col-xxl-11 pt-5">
                        <div className="row g-5 my-1">
                            <div className="col-lg-6 py-4 my-auto">
                                <h1 className="h-hero">Sewa & Rental Mobil Terbaik di kawasan
                                    (Lokasimu)</h1>
                                <p className="p-hero py-3">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                                    terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24
                                    jam.
                                </p>

                                <div className=" gap-2 d-md-flex justify-content-md-start">
                                    <button onClick={() => window.location.href = "/cars"} className="btn btn-sewa">Mulai Sewa Mobil</button>
                                </div>
                            </div>
                            <div className=" col-11 col-sm-11 col-lg-6">
                                <img src={imgCar} className="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes"
                                    loading="lazy" />

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}