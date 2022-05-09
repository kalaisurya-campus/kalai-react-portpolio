import React, { useEffect } from "react";
import "./styles/Section8about.scss";
import name from "../../../assets/kalai-port/juice.png";
import circle from "../../../assets/kalai-port/rotates.png";
import like1 from "../../../assets/kalai-port/like1.png";
import like2 from "../../../assets/kalai-port/like2.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Section8about({ color }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="abouts" id="about">
            <div className="inside-abouts">
                <div className="left-about-first">
                    <div className="back">
                        <div className="image1">
                            <img src={name} className="persons" />
                        </div>
                        <div className="image2">
                            <img src={circle} className="rotates" />
                        </div>
                    </div>
                </div>
                <div className="right-about-second">
                    <div className="content-about">
                        <h1
                            className="mt-3"
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="ms-2"
                        >
                            ABOUT{" "}
                            <span style={{ color: color, fontWeight: 600 }}>
                                ME
                            </span>
                        </h1>
                        <p
                            className="p-split mt-2 ms-2"
                            data-aos="fade-down"
                            data-aos-duration="3000"
                        >
                            <span className="myname">
                                My{" "}
                                <span style={{ color: color, fontWeight: 600 }}>
                                    Name Is
                                </span>
                            </span>
                            <span className="surya">
                                Kalai
                                <span style={{ color: color, fontWeight: 700 }}>
                                    surya
                                </span>
                            </span>
                        </p>
                        <p
                            className="is mt-2 mb-3"
                            data-aos="fade-right"
                            data-aos-duration="3000"
                        >
                            To find a{" "}
                            <span style={{ color: color }}>position</span> that
                            is challenging, rewarding and provides an
                            opportunity to expand{" "}
                            <span style={{ color: color }}>
                                my knowledge and abilities in creating client
                                centric solutions
                            </span>
                            .
                        </p>
                    </div>
                    <div className="another-content-section">
                        <div className="box1">
                            <div className="left-box1">
                                <p data-aos="fade-up" data-aos-duration="3000">
                                    <span className="age-text">Age</span> :{" "}
                                    <span className="age-texts">23</span>
                                </p>
                                <p
                                    data-aos="fade-down"
                                    data-aos-duration="3000"
                                >
                                    <span className="age-text">Gender</span>:
                                    <span className="age-texts">Male</span>
                                </p>
                                <p
                                    data-aos="fade-left"
                                    data-aos-duration="3000"
                                >
                                    <span className="age-text">Developer</span>:
                                    <span className="age-texts">
                                        React{" "}
                                        <span style={{ color: color }}>
                                            Developer
                                        </span>
                                    </span>
                                </p>
                                <p
                                    data-aos="fade-right"
                                    data-aos-duration="3000"
                                >
                                    <span className="age-text">Experience</span>
                                    :
                                    <span
                                        className="age-texts"
                                        style={{ color: color }}
                                    >
                                        1.4 Years
                                    </span>
                                </p>
                                <p
                                    data-aos="fade-down"
                                    data-aos-duration="3000"
                                >
                                    <span className="age-text">Freelance</span>:
                                    <span className="age-texts">Available</span>
                                </p>
                            </div>
                            <div
                                className="right-box1"
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                <img src={like1} className="like1" />
                            </div>
                        </div>
                        <div className="box2">
                            <div
                                className="left-box2"
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                <img src={like2} className="like1" />
                            </div>
                            <div className="right-box2">
                                <p
                                    data-aos="fade-right"
                                    data-aos-duration="3000"
                                >
                                    <span className="age-text">Language</span>:
                                    <span
                                        className="age-texts"
                                        style={{ color: color }}
                                    >
                                        Telugu/Tamil/English
                                    </span>
                                </p>
                                <p data-aos="fade-up" data-aos-duration="3000">
                                    <span className="age-text">Phone</span>:
                                    <span className="age-texts">
                                        +91 877-
                                        <span style={{ color: color }}>
                                            837
                                        </span>
                                        -7119
                                    </span>
                                </p>
                                <p
                                    data-aos="fade-down"
                                    data-aos-duration="3000"
                                >
                                    <span className="age-text">Email</span>:
                                    <span className="age-texts">
                                        <span style={{ color: color }}>
                                            kalaimca685@gmail
                                        </span>
                                        .com
                                    </span>
                                </p>
                                <p data-aos="fade-up" data-aos-duration="3000">
                                    <span className="age-text">Address</span>:
                                    <span
                                        className="age-texts"
                                        style={{ color: color }}
                                    >
                                        Krishnagiri
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section8about;
