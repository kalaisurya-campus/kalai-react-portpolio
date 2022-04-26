import sectios1 from "../../../assets/kalai-port/section1.png";
import section1rocket from "../../../assets/kalai-port/section1-rocket.png";
import offset from "../../../assets/kalai-port/offset.png";
import sm1 from "../../../assets/kalai-port/sm1.png";
import sm2 from "../../../assets/kalai-port/sm2.png";
import sm3 from "../../../assets/kalai-port/sm3.png";
import sm4 from "../../../assets/kalai-port/sm4.png";
import sm5 from "../../../assets/kalai-port/sm5.png";
import offsetleft from "../../../assets/kalai-port/offset-left.png";

import purush from "../../../assets/kalai-port/kal-imag1.png";
import Mobilesection1 from "./components/mobilesection1/Mobilesection1";
import circles from "../../../assets/kalai-port/topcirles.png";
import { Link } from "react-scroll";

import profile from "../../../assets/kalai-port/profile.png";
import settings from "../../../assets/kalai-port/settings -kalai.png";
import Aboutus from "../../../assets/kalai-port/abouts.png";
import chats from "../../../assets/kalai-port/chats.png";
import developers from "../../../assets/kalai-port/developer.png";
import services from "../../../assets/kalai-port/services.png";
import active from "../../../assets/kalai-port/activities.png";

import React from "react";
import "./styles/Section1.scss";
function Section1({ color }) {
    return (
        <>
            <div className="section1 d-none d-lg-block" id="home">
                <div className="inside-section1">
                    <div className="left-section1">
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
                    <div className="right-section1">
                        <div className="right-offset">
                            <img src={offsetleft} className="right-oofsets" />
                        </div>
                        <div className="purush">
                            <img src={purush} className="purushed" />
                        </div>
                        <div className="profile">
                            <Link to="acitivities">
                                <img src={profile} className="profiles" />
                            </Link>
                        </div>
                        <div className="settings-kalai">
                            <img
                                src={settings}
                                alt="no"
                                className="settings-kalais"
                            />
                        </div>
                        <div className="about">
                            <Link to="abouts">
                                <img
                                    src={Aboutus}
                                    to="about"
                                    alt="no"
                                    className="abouts-kalai"
                                />
                            </Link>
                        </div>
                        <div className="chats">
                            <Link to="chat">
                                <img
                                    src={chats}
                                    alt="no"
                                    className="chats-kalai"
                                />
                            </Link>
                        </div>
                        <div className="developers">
                            <Link to="projects">
                                <img
                                    src={developers}
                                    alt="no"
                                    className="developers-kalai"
                                />
                            </Link>
                        </div>
                        <div className="services">
                            <Link to="service">
                                <img
                                    src={services}
                                    alt="no"
                                    className="services-kalai"
                                />
                            </Link>
                        </div>
                        {/* <div className="actives">
                        <img src={active} alt="no" className="actives-kalai" />
                    </div> */}

                        <div className="smile1">
                            <img src={sm1} className="smiles" />
                        </div>
                        <div className="smile2">
                            <img src={sm2} className="smiles1" />
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
