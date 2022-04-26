import React, { useEffect } from "react";
import "./styles/Section3.scss";

import g1 from "../../../assets/kalai-port/exper1.png";
import g2 from "../../../assets/kalai-port/exper2.png";
import g3 from "../../../assets/kalai-port/g2.png";
import g4 from "../../../assets/kalai-port/g3.png";
import personthink from "../../../assets/kalai-port/personthink.png";
import exp1 from "../../../assets/kalai-port/exp1.png";
import box1 from "../../../assets/kalai-port/box.png";
import box2 from "../../../assets/kalai-port/box2.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Section3() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <div className="section3" id="service">
                <h1 className="mb-5 ms-4">Experience</h1>

                <div className="inside-experience">
                    <div className="box-scrolls">
                        <h1>React Developer</h1>
                        <h4>Experience:1 Year</h4>
                    </div>
                </div>
                {/* <div className="inside-section3">
                    <div className="left-section3">
                        <div
                            className="mb-5"
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            <img src={g1} className="g1" />
                        </div>
                        <div
                            className="mt-5"
                            data-aos="fade-up-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            <img src={g4} className="g2" />
                        </div>
                    </div>

                    <div className="right-section3">
                        <div
                            className="mb-5"
                            data-aos="fade-up-left"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            <img src={g3} className="g3" />
                        </div>
                        <div
                            className="mt-5"
                            data-aos="flip-down"
                            ata-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            <img src={g2} className="g4 mt-5" />
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default Section3;
