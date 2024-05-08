import React from "react";
import "./Dashboard.css"
import iconComplete from "../assets/icon_complete.svg"
import iconPrice from "../assets/icon_price.png"
import iconHours from "../assets/icon_24hrs.png"
import iconProfesional from "../assets/icon_professional.png"

export default function WhyUs() {
    return (
        <>
            <section id="why-us">
                <div className="container py-2" id="hanging-icons">
                    <h2 className="title-why-us mb-3">Why Us</h2>
                    <p className="desc-why-us mb-4">Mengapa harus pilih Binar Car Rental?</p>
                    <div className="row g-4 gx-3 py-2 row-cols-1 row-cols-md-4 justify-content-evenly">
                        <div className="col d-flex align-items-start  ">
                            <div className="container border rounded card-why-us">
                                <img src={iconComplete} alt="" className="p-2 mt-3 " />
                                <h3 className="h-why-us mt-2 mb-3 ms-2">Mobil Lengkap</h3>
                                <p className="p-why-us ms-2">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                                </p>

                            </div>
                        </div>
                        <div className="col d-flex align-items-start  ">
                            <div className="container border rounded card-why-us">
                                <img src={iconPrice} alt="" className="p-2 mt-3 " />
                                <h3 className="h-why-us mt-2 mb-3 ms-2">Harga Murah</h3>
                                <p className="p-why-us ms-2">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
                                    mobil
                                    lain
                                </p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start  ">
                            <div className="container border rounded card-why-us">
                                <img src={iconHours} alt="" className="p-2 mt-3 " />
                                <h3 className=" h-why-us mt-2 mb-3 ms-2">Layanan 24 Jam</h3>
                                <p className="p-why-us ms-2">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia
                                    di
                                    akhir
                                    minggu</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start  ">

                            <div className="container border rounded card-why-us">
                                <img src={iconProfesional} alt="" className=" p-2 mt-3 " />
                                <h3 className=" h-why-us mt-2 mb-3 ms-2">Sopir Profesional</h3>
                                <p className="p-why-us ms-2">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
                                    waktu
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}