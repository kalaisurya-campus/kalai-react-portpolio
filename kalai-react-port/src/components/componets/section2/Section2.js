import React, { useEffect } from "react";
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
function Section2(props) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="section2">
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
                                    <div className="card-java col-lg-10 mt-5">
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
                                            <button className="readmore mt-2">
                                                Read More...
                                            </button>
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

                            <div className="right-split-cards">
                                <div
                                    className="cards"
                                    data-aos="flip-up"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                >
                                    <div className="card-java col-lg-10 mt-5">
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
                                                HTML & CSS
                                            </h1>
                                            <p className="loreams mt-2">
                                                Loream ipsum dummy text are
                                                useually are print and website
                                                Dummy Content
                                            </p>
                                            <button className="readmore mt-2">
                                                Read More...
                                            </button>
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
                                    <div className="card-java col-lg-10 mt-5">
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
                                                React Developer
                                            </h1>
                                            <p className="loreams mt-2">
                                                Loream ipsum dummy text are
                                                useually are print and website
                                                Dummy Content
                                            </p>
                                            <button className="readmore mt-2">
                                                Read More...
                                            </button>
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
                                    <div className="card-java col-lg-7 mt-5">
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
                                                Bootstrap
                                            </h1>
                                            <p className="loreams mt-2">
                                                Loream ipsum dummy text are
                                                useually are print and website
                                                Dummy Content
                                            </p>
                                            <button className="readmore mt-2">
                                                Read More...
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="next-data">
                            <div className="cards mt-5">
                                <div
                                    className="card-java col-lg-7 mt-5"
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
                                        <button className="readmore mt-2">
                                            Read More...
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section2;
