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
import { Link } from "react-router-dom";
import dum5 from "../../../assets/kalai-port/dum5.png";
import dum8 from "../../../assets/kalai-port/dum8.png";
import rocketpersond from '../../../assets/kalai-port/rocketstart.png';
function Section2({ color }) {
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
            <div className="section2 d-none d-lg-block" id="service">
                <div className="section2-inside">
                    <div className="section2-left ">
                        <img src={rightoffset} className="left-off" />

                        <div className="content-section2 mb-5">
                            <h1
                                className="my"
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                            >
                                <span
                                    className="aw"
                                    style={{ color: color, fontWeight: 700 }}
                                >
                                    My Aw
                                </span>
                                <span>esome</span>
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
                                Ability to{" "}
                                <span style={{ color: color }}>
                                    quickly grasp technical
                                </span>{" "}
                                aspects and face new challenges.
                                <span style={{ color: color }}>
                                    {" "}
                                    Very competitive
                                </span>{" "}
                                and adaptable to a{" "}
                                <span style={{ color: color }}>
                                    challenging environment.
                                </span>
                            </p>
                            <button
                                className="download"
                                data-aos="flip-up"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                            >
                                <a
                                    download="file"
                                    href="https://novoresume.com/editor/resume/5f594520-c844-11ec-bd37-dd260f65f024"
                                    style={{
                                        color: "black",
                                        textDecoration: "none",
                                    }}
                                >
                                    Download CV
                                </a>
                            </button>
                        </div>

                        <div className="split-cards ">
                            <div className="left-split-cards">
                                <div
                                    className="cards"
                                    data-aos="fade-down-left"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                >
                                    <div className="card-java col-lg-10 col-xl-8 col-xxl-11 mt-5 mb-5">
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
                                            <h1
                                                className="javascript mt-2"
                                                style={{ color: color }}
                                            >
                                                javascript
                                            </h1>
                                            <p className="loreams mt-2">
                                                <span style={{ color: color }}>
                                                    JavaScript
                                                </span>{" "}
                                                is a dynamic programming
                                                language that's used for web
                                                development,{" "}
                                                <span
                                                    style={{
                                                        color: color,
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    in web applications, for
                                                    game development,
                                                </span>{" "}
                                                and lots more HTML and CSS.
                                            </p>

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
                                    {/* <img
                                        src={personround}
                                        className="laptops"
                                        data-aos="fade-down-right"
                                        data-aos-easing="linear"
                                        data-aos-duration="1500"
                                    /> */}
                                    <img src={rocketpersond}/>
                                </div>
                            </div>

                            <div className="right-split-cards mt-5">
                                <div
                                    className="cards mt-5"
                                    data-aos="flip-up"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    style={{
                                        paddingTop: "40px",
                                    }}
                                >
                                    <div className="card-java col-lg-10 col-xl-8 col-xxl-11 mt-5 ms-5">
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
                                            <h1
                                                className="javascript mt-2"
                                                style={{ color: color }}
                                            >
                                                HTML & CSS
                                            </h1>
                                            <p className="loreams mt-2">
                                                HTML (the Hypertext Markup
                                                Language) and{" "}
                                                <span
                                                    style={{
                                                        color: color,
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    CSS (Cascading Style Sheets)
                                                </span>{" "}
                                                are two of the core technologies
                                                for building Web pages.
                                            </p>

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

                        <div className="left-rout">
                            <img src={rightoffset} className="rtr-rounds" />
                        </div>
                    </div>
                    <div className="section2-right">
                        <div className="split-right-section">
                            <div className="left">
                                <div
                                    className="cards mt-3 mb-5"
                                    data-aos="fade-up-left"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                >
                                    <div className="card-java col-lg-9 col-xl-7 col-xxl-11 mt-5">
                                        <div className="empty-image">
                                            <img
                                                src={dum5}
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
                                            <h1
                                                className="javascript mt-2"
                                                style={{ color: color }}
                                            >
                                                React Developer
                                            </h1>
                                            <p className="loreams mt-2">
                                                React is a declarative,
                                                efficient, and flexible
                                                JavaScript{" "}
                                                <span
                                                    style={{
                                                        color: color,
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    library for building
                                                </span>
                                                user interfaces.
                                            </p>

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
                        <div className="another-split-data ms-5">
                            <div className="right-move">
                                <div
                                    className="cards mt-5 mb-5"
                                    data-aos="fade-up-right"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                >
                                    <div className="card-java col-lg-5 col-xl-6 mt-5">
                                        <div className="empty-image">
                                            <img
                                                src={dum5}
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
                                            <h1
                                                className="javascript mt-2"
                                                style={{ color: color }}
                                            >
                                                Bootstrap
                                            </h1>
                                            <p className="loreams mt-2">
                                                Bootstrap is a{" "}
                                                <span
                                                    style={{
                                                        color: color,
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    free and open source front
                                                    end
                                                </span>{" "}
                                                development framework for the
                                                creation of websites and web
                                                apps.
                                            </p>

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
                                        <h1
                                            className="javascript mt-2"
                                            style={{ color: color }}
                                        >
                                            UI & UX
                                        </h1>
                                        <p className="loreams mt-2">
                                            the user experience is the result of
                                            <br />
                                            <span style={{ color: color }}>
                                                {" "}
                                                their interaction
                                            </span>{" "}
                                            with a product or service, <br />
                                            which means that{" "}
                                            <span
                                                style={{
                                                    color: color,
                                                    fontWeight: 600,
                                                }}
                                            >
                                                user experience includes,
                                            </span>{" "}
                                            but is not limited to, a user
                                            interface.
                                        </p>

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
            <div className="containers d-none d-lg-block py-2 mb-5">
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
                <Section2Mobile color={color} />
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
                                JavaScript is a dynamic programming language
                                that's used for web development,{" "}
                                <span
                                    style={{
                                        color: color,
                                        fontWeight: 600,
                                    }}
                                >
                                    in web applications, for game development,
                                </span>{" "}
                                and lots more HTML and CSS.
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
                                HTML (the Hypertext Markup Language) and{" "}
                                <span
                                    style={{
                                        color: color,
                                        fontWeight: 600,
                                    }}
                                >
                                    CSS (Cascading Style Sheets)
                                </span>{" "}
                                are two of the core technologies for building
                                Web pages.
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
                                React is a declarative, efficient, and flexible
                                JavaScript{" "}
                                <span
                                    style={{
                                        color: color,
                                        fontWeight: 600,
                                    }}
                                >
                                    library for building
                                </span>
                                user interfaces.
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
                                Bootstrap is a{" "}
                                <span
                                    style={{
                                        color: color,
                                        fontWeight: 600,
                                    }}
                                >
                                    free and open source front end
                                </span>{" "}
                                development framework for the creation of
                                websites and web apps.
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
                                the user experience is the result of
                                <br />
                                <span style={{ color: color }}>
                                    {" "}
                                    their interaction
                                </span>{" "}
                                with a product or service, <br />
                                which means that{" "}
                                <span
                                    style={{
                                        color: color,
                                        fontWeight: 600,
                                    }}
                                >
                                    user experience includes,
                                </span>{" "}
                                but is not limited to, a user interface.
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
