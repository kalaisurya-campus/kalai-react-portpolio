import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import rock2 from "../../../../assets/kalai-port/rock1.png";
import star from "../../../../assets/kalai-port/star.png";
import s1 from "../../../../assets/kalai-port/s1.png";
import s2 from "../../../../assets/kalai-port/s2.png";
import s3 from "../../../../assets/kalai-port/s3.png";
import s4 from "../../../../assets/kalai-port/s4.png";
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
                            className="card-javas col-xs-10 col-sm-10 col-md-10"
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
                                <button className="readmore mt-2 mb-4">
                                    Read More...
                                </button>
                            </div>
                        </div>
                        <div
                            className="card-javas col-xs-10 col-sm-10 col-md-10 mt-5"
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
                                <button className="readmore mt-2 mb-4">
                                    Read More...
                                </button>
                            </div>
                        </div>

                        <div
                            className="card-javas col-xs-10 col-sm-10 col-md-10 mt-5"
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
                                <button className="readmore mt-2 mb-4">
                                    Read More...
                                </button>
                            </div>
                        </div>

                        <div
                            className="card-javas col-xs-10 col-sm-10 col-md-10 mt-5"
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
                                <button className="readmore mt-2 mb-4">
                                    Read More...
                                </button>
                            </div>
                        </div>

                        <div
                            className="card-javas col-xs-10 col-sm-10 col-md-10 mt-5"
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
                                <button className="readmore mt-2 mb-4">
                                    Read More...
                                </button>
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
                        data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >
                        <img src={s4} className="cars11" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section2Mobile;
