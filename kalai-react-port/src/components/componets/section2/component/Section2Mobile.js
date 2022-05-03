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
import dum5 from '../../../../assets/kalai-port/dum5.png';
import "./styles/Section2Mobile.scss";
function Section2Mobile({ color }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <div
                className="content-section2 mb-5 d-xs-block d-lg-none"
                id="seric"
            >
                <h1
                    className="my ms-3"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                >
                    <span className="aw" style={{ color: color }}>
                        My Aw
                    </span>
                    <span style={{ color: color }}>esome</span>
                </h1>
                <h1
                    className="service ms-3"
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
                    <span style={{ color: color }}> Very competitive</span> and
                    adaptable to a{" "}
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
                    Download CV
                </button>
            </div>
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
                                <img src={dum5} className="empty-rocket" />
                            </div>
                            <div className="round-empty">
                                <img src={star} className="stars my-auto" />
                            </div>
                            <div className="button-content">
                                <h1
                                    className="javascript mt-2"
                                    style={{ color: color, fontWeight: 700 }}
                                >
                                    React Developer
                                </h1>
                                <p className="loreams mt-2">
                                    React is a declarative, efficient, and
                                    flexible JavaScript{" "}
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
                                <h1
                                    className="javascript mt-2"
                                    style={{ color: color, fontWeight: 700 }}
                                >
                                    javascript
                                </h1>
                                <p className="loreams mt-2 ">
                                    JavaScript is a dynamic programming language
                                    that's used for web development,{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 600,
                                        }}
                                    >
                                        in web applications, for game
                                        development,
                                    </span>{" "}
                                    and lots more HTML and CSS.
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
                                <img src={dum5} className="empty-rocket" />
                            </div>
                            <div className="round-empty">
                                <img src={star} className="stars my-auto" />
                            </div>
                            <div className="button-content">
                                <h1
                                    className="javascript mt-2"
                                    style={{ color: color, fontWeight: 700 }}
                                >
                                    HTML & CSS
                                </h1>
                                <p className="loreams mt-2">
                                    HTML (the Hypertext Markup Language) and{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 600,
                                        }}
                                    >
                                        CSS (Cascading Style Sheets)
                                    </span>{" "}
                                    are two of the core technologies for
                                    building Web pages.
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
                                <h1
                                    className="javascript mt-2"
                                    style={{ color: color, fontWeight: 700 }}
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
                                        free and open source front end
                                    </span>{" "}
                                    development framework for the creation of
                                    websites and web apps.
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
                                <img src={dum5} className="empty-rocket" />
                            </div>
                            <div className="round-empty">
                                <img src={star} className="stars my-auto" />
                            </div>
                            <div className="button-content">
                                <h1
                                    className="javascript mt-2"
                                    style={{ color: color, fontWeight: 700 }}
                                >
                                    UI & UX
                                </h1>
                                <p className="loreams mt-2">
                                    the user experience is the result of
                                    <br />
                                    their interaction with a product or service,{" "}
                                    <br />
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
                                <h1
                                    className="javascript mt-2"
                                    style={{ color: color, fontWeight: 700 }}
                                >
                                    Sass
                                </h1>
                                <p className="loreams mt-2">
                                    Sass which stands for '
                                    <span style={{ color: color }}>
                                        Syntactically awesome style sheets
                                    </span>{" "}
                                    is an extension of CSS that enables you to
                                    use{" "}
                                    <span style={{ color: color }}>
                                        things like variables
                                    </span>
                                    , nested rules,{" "}
                                    <span style={{ color: color }}>
                                        inline imports{" "}
                                    </span>
                                    and more..
                                </p>
                                {/* <button className="readmore mt-2 mb-4">
                                    Read More...
                                </button> */}
                                <p
                                    type="button"
                                    class="readmore"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal5"
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
                                    textAlign: "center",
                                }}
                            >
                                <span style={{ color: color }}>JavaScript</span>{" "}
                                is a dynamic programming language that's used
                                for web development,{" "}
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
                                    color: color,
                                    fontWeight: 700,
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
                                    textAlign: "center",
                                }}
                            >
                                HTML (the Hypertext Markup Language) and{" "}
                                <span
                                    style={{
                                        color: color,

                                        fontWeight: 700,
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
                                    color: color,
                                    fontWeight: 700,
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
                                    color: color,
                                    fontWeight: 700,
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
                                    color: color,
                                    fontWeight: 700,
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
                                    textAlign: "center",
                                }}
                            >
                                <span style={{ color: color }}>
                                    the user experience
                                </span>{" "}
                                is the result of their interaction with a{" "}
                                <span style={{ color: color }}>
                                    product or service
                                </span>
                                , which means that{" "}
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

            {/* sasss model popup */}
            <div
                class="modal fade"
                id="exampleModal5"
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
                                    color: color,
                                    fontWeight: 700,
                                }}
                            >
                                Sass
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
                                    textAlign: "center",
                                }}
                            >
                                Sass which stands for '
                                <span style={{ color: color }}>
                                    Syntactically awesome style sheets
                                </span>{" "}
                                is an extension of CSS that enables you to use{" "}
                                <span style={{ color: color }}>
                                    things like variables
                                </span>
                                , nested rules,{" "}
                                <span style={{ color: color }}>
                                    inline imports{" "}
                                </span>
                                and more..
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
        </>
    );
}

export default Section2Mobile;
