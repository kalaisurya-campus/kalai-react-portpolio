import { Modal } from "bootstrap";
import React, { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/Section2.scss";
import rightoffset from "../../../assets/kalai-port/offset.png";
import rock2 from "../../../assets/kalai-port/rock1.png";
import star from "../../../assets/kalai-port/star.png";
import smile from "../.././../assets/kalai-port/DARK1.png";
import dark from "../../../assets/kalai-port/SMILE1.png";
import persons from "../../../assets/kalai-port/jump-person.png";
import personround from "../../../assets/kalai-port//jumpe.png";
import laptops from "../../../assets/kalai-port/laptop.png";
import offsetleft from "../../../assets/kalai-port/offset-left.png";
import gripup from "../../../assets/kalai-port/grup1.png";

import s1 from "../../../assets/kalai-port/s1.png";
import s2 from "../../../assets/kalai-port/s2.png";
import s3 from "../../../assets/kalai-port/s3.png";
import s4 from "../../../assets/kalai-port/s4.png";
import Section2Mobile from "./component/Section2Mobile";

import react from "../../../assets/kalai-port/react.png";
import javascript from "../../../assets/kalai-port/javascript.png";
import html from "../../../assets/kalai-port/html.png";
import bootstrap from "../../../assets/kalai-port/bootstrap.png";
function Section2(props) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const [Artemptyimage, SetIMagesArt] = useState([]);

    const useref = useRef(null);
    const showModal = () => {
        const modalEle = useref.current;
        const bsModal = new Modal(modalEle, {
            backdrop: "static",
            keyboard: false,
        });
        bsModal.show();
    };

    const hideModal = () => {
        const modalEle = useref.current;
        const bsModal = Modal.getInstance(modalEle);
        bsModal.hide();
    };

    return (
        <>
            <div className="section2 d-none d-lg-block" id="aboutus">
                <div className="section2-inside">
                    <div className="section2-left">
                        <img src={rightoffset} className="left-off" />

                        <div className="content-section2 mb-5">
                            <h1
                                className="my"
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                            >
                                <span className="aw">My Aw</span>esome{" "}
                            </h1>
                            <h1
                                className="service"
                                data-aos="fade-down-left"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                            >
                                Services
                            </h1>
                            <p
                                className="loreams"
                                data-aos="fade-up-right"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                            >
                                <span className="aw">Loream</span> ipsum dummy
                                text are useually are print and website industry
                                so i used their also.
                            </p>
                            <button
                                className="download"
                                data-aos="flip-up"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                            >
                                Download CV
                            </button>
                        </div>

                        <div className="split-cards">
                            <div className="left-split-cards">
                                <div
                                    className="cards"
                                    data-aos="fade-down-left"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                >
                                    <div className="card-java col-lg-10 col-xl-8 col-xxl-12 mt-5 mb-5">
                                        <div className="empty-image">
                                            <img
                                                src={rock2}
                                                className="empty-rocket"
                                            />
                                        </div>
                                        <div className="round-empty">
                                            <img
                                                src={star}
                                                className="stars my-auto"
                                            />
                                        </div>
                                        <div className="button-content">
                                            <h1 className="javascript mt-2">
                                                javascript
                                            </h1>
                                            <p className="loreams mt-2">
                                                Loream ipsum dummy text are
                                                useually are print and website
                                                Dummy Content
                                            </p>
                                            {/* <button className="readmore mt-2">
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
                                </div>
                                <div className="left-side-round">
                                    <img
                                        src={offsetleft}
                                        className="roundside"
                                        data-aos="fade-down-right"
                                        data-aos-easing="linear"
                                        data-aos-duration="1500"
                                    />
                                </div>
                                <div className="laptop mt-5">
                                    <img
                                        src={personround}
                                        className="laptops"
                                        data-aos="fade-down-right"
                                        data-aos-easing="linear"
                                        data-aos-duration="1500"
                                    />
                                </div>
                            </div>

                            <div className="right-split-cards mt-5">
                                <div
                                    className="cards"
                                    data-aos="flip-up"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                >
                                    <div className="card-java col-lg-10 col-xl-8 col-xxl-12 mt-5 ms-5">
                                        <div className="empty-image">
                                            <img
                                                src={html}
                                                className="empty-rocket"
                                            />
                                        </div>
                                        <div className="round-empty">
                                            <img
                                                src={star}
                                                className="stars my-auto"
                                            />
                                        </div>
                                        <div className="button-content">
                                            <h1 className="javascript mt-2">
                                                HTML & CSS
                                            </h1>
                                            <p className="loreams mt-2">
                                                Loream ipsum dummy text are
                                                useually are print and website
                                                Dummy Content
                                            </p>
                                            {/* <button className="readmore mt-2">
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
                                </div>
                            </div>
                        </div>

                        <div className="dark-image">
                            <img
                                src={persons}
                                className="darks"
                                data-aos="zoom-in-up"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                            />
                        </div>
                        {/* <div>
                              <img src={gripup} className="w-50 mx-auto"/>
                                </div> */}
                        <div className="left-rout">
                            <img src={rightoffset} className="rtr-rounds" />
                        </div>
                    </div>
                    <div className="section2-right">
                        <div className="split-right-section">
                            <div className="left">
                                <div
                                    className="cards mt-5"
                                    data-aos="fade-up-left"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                >
                                    <div className="card-java col-lg-9 col-xl-7 col-xxl-12 mt-5">
                                        <div className="empty-image">
                                            <img
                                                src={react}
                                                className="empty-rocket"
                                            />
                                        </div>
                                        <div className="round-empty">
                                            <img
                                                src={star}
                                                className="stars my-auto"
                                            />
                                        </div>
                                        <div className="button-content">
                                            <h1 className="javascript mt-2">
                                                React Developer
                                            </h1>
                                            <p className="loreams mt-2">
                                                Loream ipsum dummy text are
                                                useually are print and website
                                                Dummy Content
                                            </p>
                                            {/* <button className="readmore mt-2">
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
                                </div>
                            </div>
                            <div className="right">
                                <div className="rocket mt-5">
                                    <img
                                        src={rock2}
                                        className="rocket2"
                                        data-aos="flip-down"
                                        data-aos-easing="linear"
                                        data-aos-duration="1500"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="another-split-data">
                            <div className="right-move">
                                <div
                                    className="cards mt-5"
                                    data-aos="fade-up-right"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                >
                                    <div className="card-java col-lg-7 col-xxl-8 mt-5">
                                        <div className="empty-image">
                                            <img
                                                src={bootstrap}
                                                className="empty-rocket"
                                            />
                                        </div>
                                        <div className="round-empty">
                                            <img
                                                src={star}
                                                className="stars my-auto"
                                            />
                                        </div>
                                        <div className="button-content">
                                            <h1 className="javascript mt-2">
                                                Bootstrap
                                            </h1>
                                            <p className="loreams mt-2">
                                                Loream ipsum dummy text are
                                                useually are print and website
                                                Dummy Content
                                            </p>
                                            {/* <button className="readmore mt-2">
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
                                </div>
                            </div>
                        </div>
                        <div className="next-data">
                            <div className="cards mt-5">
                                <div
                                    className="card-java col-lg-7 col-xxl-8 mt-5"
                                    data-aos="fade-down-right"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                >
                                    <div className="empty-image">
                                        <img
                                            src={rock2}
                                            className="empty-rocket"
                                        />
                                    </div>
                                    <div className="round-empty">
                                        <img
                                            src={star}
                                            className="stars my-auto"
                                        />
                                    </div>
                                    <div className="button-content">
                                        <h1 className="javascript mt-2">
                                            UI & UX
                                        </h1>
                                        <p className="loreams mt-2">
                                            Loream ipsum dummy text are useually
                                            are print and website Dummy Content
                                        </p>
                                        {/* <button className="readmore mt-2">
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
                </div>
            </div>
            <div className="containers d-none d-lg-block py-2">
                <div className="set-projects">
                    <div className="car1 mt-3">
                        <img src={s1} className="cars1" />
                    </div>
                    <div className="car1  mt-3">
                        <img src={s2} className="cars1" />
                    </div>
                    <div className="car1 mt-3">
                        <img src={s3} className="cars1" />
                    </div>
                    <div className="car1 mt-3">
                        <img src={s4} className="cars1" />
                    </div>
                </div>
            </div>
            <div>
                <Section2Mobile />
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

export default Section2;
