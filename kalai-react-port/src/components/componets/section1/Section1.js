import React from "react";
import "./styles/Section1.scss";
import sectios1 from "../../../assets/kalai-port/section1.png";
import section1rocket from "../../../assets/kalai-port/section1-rocket.png";
import offset from "../../../assets/kalai-port/offset.png";
import sm1 from "../../../assets/kalai-port/sm1.png";
import sm2 from "../../../assets/kalai-port/sm2.png";
import sm3 from "../../../assets/kalai-port/sm3.png";
import sm4 from "../../../assets/kalai-port/sm4.png";
import sm5 from "../../../assets/kalai-port/sm5.png";
import offsetleft from "../../../assets/kalai-port/offset-left.png";

import purush from "../../../assets/kalai-port/purush.png";
import Mobilesection1 from "./components/mobilesection1/Mobilesection1";
import circles from "../../../assets/kalai-port/topcirles.png";

function Section1({ color }) {
    return (
        <>
            <div className="section1 d-none d-lg-block" id="home">
                <div className="secion1-inside">
                    <div className="section1-left col-lg-6 col-md-10 col-sm-11 my-auto ">
                        <div className="offset-top">
                            <img src={offset} className="offs" />
                        </div>

                        <div className="image1">
                            <img src={sectios1} className="section-image" />
                        </div>
                        <div className="content-section1 my-auto">
                            <h1 className="hy mb-1" style={{ color: color }}>
                                Hy! I Am
                            </h1>
                            <h1 className="kalai mt-4">Kalaisurya</h1>
                            <span className="loream mt-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Qui laborum quasi, incidunt
                                dolore iste nostrum cupiditate voluptas?
                                Laborum, voluptas natus?
                            </span>
                            <button className="hire mt-5">Hire Me</button>
                        </div>
                        <div className="bottom-image">
                            <img src={section1rocket} className="rocket" />
                        </div>
                    </div>
                    <div className="section1-right col-lg-6 col-md-10 col-sm-11 ">
                        <div className="right-offset">
                            <img src={offsetleft} className="right-oofsets" />
                        </div>
                        <div className="purush">
                            <img src={purush} className="purushed" />
                        </div>
                        <div className="image-rounds">
                            {/* <img src={circles} className="round1" /> */}
                        </div>
                        <div className="smile1">
                            <img src={sm1} className="smiles" />
                        </div>
                        <div className="smile2">
                            {/* <img src={sm2} className="smiles1" /> */}
                        </div>
                        <div className="smile3">
                            <img src={sm3} className="smiles2" />
                        </div>
                        <div className="smile4">
                            <img src={sm4} className="smiles3" />
                        </div>
                        <div className="smile5">
                            <img src={sm5} className="smiles4" />
                        </div>
                        {/* <div className="image-round">
                        <img src={round2} className="round2" />
                    </div> */}
                    </div>
                </div>
            </div>
            <div>
                <Mobilesection1 />
            </div>
        </>
    );
}

export default Section1;
