import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import rock2 from "../../../../assets/kalai-port/rock1.png";
import star from "../../../../assets/kalai-port/star.png";
import s1 from "../../../../assets/kalai-port/s1.png";
import s2 from "../../../../assets/kalai-port/s2.png";
import s3 from "../../../../assets/kalai-port/s3.png";
import s4 from "../../../../assets/kalai-port/s4.png";
import react from "../../../../assets/kalai-port/react.png";
import javascript from "../../../../assets/kalai-port/javascript.png";
import html from "../../../../assets/kalai-port/html.png";
import bootstrap from "../../../../assets/kalai-port/bootstrap.png";
import "./styles/Section2Mobile.scss";
function Section2Mobile(props) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="mobilesection2 d-block d-lg-none">
                <div className="conatiner mx-auto">
                    <div className="row p-4 mx-auto">
                        <div
                            className="card-javas col-xs-10 col-sm-10 col-md-8"
                            data-aos="flip-left"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            <div className="empty-image">
                                <img src={rock2} className="empty-rocket" />
                            </div>
                            <div className="round-empty">
                                <img src={star} className="stars my-auto" />
                            </div>
                            <div className="button-content">
                                <h1 className="javascript mt-2">
                                    React Developer
                                </h1>
                                <p className="loreams mt-2">
                                    Loream ipsum dummy text are useually are
                                    print and website Dummy Content
                                </p>
                                {/* <button className="readmore mt-2 mb-4">
                                    Read More...
                                </button> */}
                                <p
                                    type="button"
                                    class="readmore"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal2"
                                >
                                    Read More...
                                </p>
                            </div>
                        </div>
                        <div
                            className="card-javas col-xs-10 col-sm-10 col-md-8 mt-5"
                            data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            <div className="empty-image">
                                <img src={rock2} className="empty-rocket" />
                            </div>
                            <div className="round-empty">
                                <img src={star} className="stars my-auto" />
                            </div>
                            <div className="button-content">
                                <h1 className="javascript mt-2">javascript</h1>
                                <p className="loreams mt-2">
                                    Loream ipsum dummy text are useually are
                                    print and website Dummy Content
                                </p>
                                {/* <button className="readmore mt-2 mb-4">
                                    Read More...
                                </button> */}
                                <p
                                    type="button"
                                    class="readmore"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Read More...
                                </p>
                            </div>
                        </div>

                        <div
                            className="card-javas col-xs-10 col-sm-10 col-md-8 mt-5"
                            data-aos="flip-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            <div className="empty-image">
                                <img src={rock2} className="empty-rocket" />
                            </div>
                            <div className="round-empty">
                                <img src={star} className="stars my-auto" />
                            </div>
                            <div className="button-content">
                                <h1 className="javascript mt-2">HTML & CSS</h1>
                                <p className="loreams mt-2">
                                    Loream ipsum dummy text are useually are
                                    print and website Dummy Content
                                </p>
                                {/* <button className="readmore mt-2 mb-4">
                                    Read More...
                                </button> */}
                                <p
                                    type="button"
                                    class="readmore"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal1"
                                >
                                    Read More...
                                </p>
                            </div>
                        </div>

                        <div
                            className="card-javas col-xs-10 col-sm-10 col-md-8 mt-5"
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            <div className="empty-image">
                                <img src={rock2} className="empty-rocket" />
                            </div>
                            <div className="round-empty">
                                <img src={star} className="stars my-auto" />
                            </div>
                            <div className="button-content">
                                <h1 className="javascript mt-2">Bootstrap</h1>
                                <p className="loreams mt-2">
                                    Loream ipsum dummy text are useually are
                                    print and website Dummy Content
                                </p>
                                {/* <button className="readmore mt-2 mb-4">
                                    Read More...
                                </button> */}
                                <p
                                    type="button"
                                    class="readmore"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal3"
                                >
                                    Read More...
                                </p>
                            </div>
                        </div>

                        <div
                            className="card-javas col-xs-10 col-sm-10 col-md-8 mt-5"
                            data-aos="flip-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            <div className="empty-image">
                                <img src={rock2} className="empty-rocket" />
                            </div>
                            <div className="round-empty">
                                <img src={star} className="stars my-auto" />
                            </div>
                            <div className="button-content">
                                <h1 className="javascript mt-2">UI & UX</h1>
                                <p className="loreams mt-2">
                                    Loream ipsum dummy text are useually are
                                    print and website Dummy Content
                                </p>
                                {/* <button className="readmore mt-2 mb-4">
                                    Read More...
                                </button> */}
                                <p
                                    type="button"
                                    class="readmore"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal4"
                                >
                                    Read More...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containers d-block d-lg-none">
                <div className="set-projects1">
                    <div
                        className="car1 mb-5 mt-3"
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >
                        <img src={s1} className="cars11" />
                    </div>
                    <div
                        className="car1 mb-5 mt-3"
                        data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >
                        <img src={s2} className="cars11" />
                    </div>
                    <div
                        className="car1 mb-5 mt-3"
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >
                        <img src={s3} className="cars11" />
                    </div>
                    <div
                        className="car1 mb-5 mt-3"
                        data-aos="fade-top"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >
                        <img src={s4} className="cars11" />
                    </div>
                </div>
            </div>
            {/* JAVASCRIPT modal */}
            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{
                    zIndex: "9000000",
                }}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1
                                class="modal-title"
                                id="exampleModalLabel"
                                style={{
                                    margin: "0 auto",
                                }}
                            >
                                javascript
                            </h1>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div
                            class="modal-body"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                            }}
                        >
                            <div className="image-set-model">
                                <img
                                    src={javascript}
                                    className="empty-rocket w-50"
                                    style={{
                                        margin: "0 auto",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                />
                            </div>

                            <p
                                className="loreams-texts mt-4 mb-4"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                }}
                            >
                                Loream ipsum dummy text are useually are print
                                and website Dummy Content
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* javascript end */}

            {/* html and css start */}

            <div
                class="modal fade"
                id="exampleModal1"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{
                    zIndex: "9000000",
                }}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1
                                class="modal-title"
                                id="exampleModalLabel"
                                style={{
                                    margin: "0 auto",
                                }}
                            >
                                HTML And CSS
                            </h1>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div
                            class="modal-body"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                            }}
                        >
                            <div className="image-set-model">
                                <img
                                    src={html}
                                    className="empty-rocket w-50"
                                    style={{
                                        margin: "0 auto",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                />
                            </div>

                            <p
                                className="loreams-texts mt-4 mb-4"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                }}
                            >
                                Loream ipsum dummy text are useually are print
                                and website Dummy Content
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* html and css end */}

            {/* React DEveloper start */}

            <div
                class="modal fade"
                id="exampleModal2"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{
                    zIndex: "9000000",
                }}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1
                                class="modal-title"
                                id="exampleModalLabel"
                                style={{
                                    margin: "0 auto",
                                }}
                            >
                                React Developer
                            </h1>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div
                            class="modal-body"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                            }}
                        >
                            <div className="image-set-model">
                                <img
                                    src={react}
                                    className="empty-rocket w-50"
                                    style={{
                                        margin: "0 auto",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                />
                            </div>

                            <p
                                className="loreams-texts mt-4 mb-4"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                }}
                            >
                                Loream ipsum dummy text are useually are print
                                and website Dummy Content
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* React Developer end */}

            {/* Bootstrap start */}

            <div
                class="modal fade"
                id="exampleModal3"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{
                    zIndex: "9000000",
                }}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1
                                class="modal-title"
                                id="exampleModalLabel"
                                style={{
                                    margin: "0 auto",
                                }}
                            >
                                Bootstrap
                            </h1>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div
                            class="modal-body"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                            }}
                        >
                            <div className="image-set-model">
                                <img
                                    src={bootstrap}
                                    className="empty-rocket w-50"
                                    style={{
                                        margin: "0 auto",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                />
                            </div>

                            <p
                                className="loreams-texts mt-4 mb-4"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                }}
                            >
                                Loream ipsum dummy text are useually are print
                                and website Dummy Content
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bootstrap end */}

            {/* UI Ans UX start */}

            <div
                class="modal fade"
                id="exampleModal4"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{
                    zIndex: "9000000",
                }}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1
                                class="modal-title"
                                id="exampleModalLabel"
                                style={{
                                    margin: "0 auto",
                                }}
                            >
                                UI AND UX
                            </h1>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div
                            class="modal-body"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                            }}
                        >
                            <div className="image-set-model">
                                <img
                                    src={rock2}
                                    className="empty-rocket w-50"
                                    style={{
                                        margin: "0 auto",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                />
                            </div>

                            <p
                                className="loreams-texts mt-4 mb-4"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                }}
                            >
                                Loream ipsum dummy text are useually are print
                                and website Dummy Content
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bootstrap end */}
        </>
    );
}

export default Section2Mobile;
