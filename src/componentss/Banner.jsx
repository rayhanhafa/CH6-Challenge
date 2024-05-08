import React from "react";
import "./Dashboard.css"

export default function Banner() {
    return (
        <>
            <section id="banner">
                <div className="container  banner">
                    <div className="p-5 text-center rounded-3 m-auto mt-5">
                        <h1 className="h-banner my-4">Sewa Mobil di (Lokasimu) Sekarang</h1>
                        <p className="p-banner mx-auto mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et
                            dolore magna aliqua.n.
                        </p>
                        <button className="btn-sewa" type="button">
                            Mulai Sewa Mobil
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}