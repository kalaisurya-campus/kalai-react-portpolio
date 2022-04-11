import React from "react";
import sectios1 from "../../../../../assets/kalai-port/section1.png";
import offset from "../../../../../assets/kalai-port/offset.png";

import sm1 from "../../../../../assets/kalai-port/sm1.png";
import sm2 from "../../../../../assets/kalai-port/sm2.png";
import sm3 from "../../../../../assets/kalai-port/sm3.png";
import sm4 from "../../../../../assets/kalai-port/sm4.png";
import sm5 from "../../../../../assets/kalai-port/sm5.png";
import offsetleft from "../../../../../assets/kalai-port/offset-left.png";
import purush from "../../../../../assets/kalai-port/purush.png";
import circles from "../../../../../assets/kalai-port/topcirles.png";
import "./styles/Mobilesection1.scss";
function Mobilesection1(props) {
    return (
        <div className="section1mobile d-block d-lg-none">
            <div className="inside-mobile">
                <div className="left-mobile">
                    <div className="offset-top">
                        <img src={offset} className="offs" />
                    </div>
                    <div className="image1 mt-5 mb-3">
                        <img src={sectios1} className="section-image" />
                    </div>
                    <h1 className="hy mb-1">Hy! I Am</h1>
                    <h1 className="kalai mt-4 mb-3">Kalaisurya</h1>
                    <span className="loream mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Massa sed nisl tellus amet.
                    </span>
                    <button className="hire mt-4 mb-3">Hire Me</button>
                </div>
                <div className="right-mobile mt-5">
                    <div className="offset-rights">
                        <img src={offsetleft} className="last-oofets" />
                    </div>
                    <div className="circles">
                        {/* <img src={circles} className="circles" /> */}
                        <div className="pur">
                            <img src={purush} className="pru" />
                        </div>
                        <div className="smiles1">
                            <img src={sm1} className="smile" />
                        </div>
                        <div className="smiles2">
                            <img src={sm2} className="smile1" />
                        </div>
                        <div className="smiles3">
                            <img src={sm3} className="smile2" />
                        </div>
                        <div className="smiles4">
                            <img src={sm4} className="smile3" />
                        </div>
                        <div className="smiles5">
                            <img src={sm5} className="smile4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mobilesection1;
