import React from "react";
import "./Dashboard.css"

export default function Faq() {
    return (
        <>
            <section className="container" id="faq">
                <div className="row" style={{ marginTop: "100px" }}>
                    <div className="col-md-6">
                        <h1 className="h-faq">Frequently Asked Question</h1>
                        <p className="p-faq mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Repudiandae dolores incidunt, alias similique possimus dicta in ex
                            aliquam, illum consequuntur eius sed tenetur non harum, eaque
                            officia laborum nobis quo.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item my-2">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="false"
                                        aria-controls="collapseOne"
                                    >
                                        Apa saja syarat yang dibutuhkan?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <strong>This is the first items accordion body.</strong> It
                                        is shown by default until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any
                                        of this with custom CSS or overriding our default variables.
                                        Its also worth noting that just about any HTML can go
                                        within the <code>.accordion-body</code>, though the
                                        transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item my-2">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Berapa hari minimal sewa mobil lepas kunci?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <strong>This is the second items accordion body.</strong>{" "}
                                        It is hidden by default until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any
                                        of this with custom CSS or overriding our default variables.
                                        Its also worth noting that just about any HTML can go
                                        within the <code>.accordion-body</code>, though the
                                        transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item my-2">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <strong>This is the third items accordion body.</strong> It
                                        is hidden by default until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any
                                        of this with custom CSS or overriding our default variables.
                                        Its also worth noting that just about any HTML can go
                                        within the <code>.accordion-body</code>, though the
                                        transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item my-2">
                                <h2 className="accordion-header" id="headingFour">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        Apakah Ada biaya antar-jemput?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFour"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <strong>This is the fourth items accordion body.</strong>{" "}
                                        It is hidden by default until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any
                                        of this with custom CSS or overriding our default variables.
                                        Its also worth noting that just about any HTML can go
                                        within the <code>.accordion-body</code>, though the
                                        transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item my-2">
                                <h2 className="accordion-header" id="headingFive">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                        Bagaimana jika terjadi kecelakaan?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFive"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <strong>This is the fifth items accordion body.</strong> It
                                        is hidden by default until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any
                                        of this with custom CSS or overriding our default variables.
                                        Its also worth noting that just about any HTML can go
                                        within the <code>.accordion-body</code>, though the
                                        transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}