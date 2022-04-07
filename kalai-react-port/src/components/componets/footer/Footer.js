import React from "react";
import footer1 from "../../../assets/kalai-port/f1.svg";
import footer2 from "../../../assets/kalai-port/f2.svg";
import footer3 from "../../../assets/kalai-port/f3.svg";
import persons from "../../../assets/kalai-port/paerson_layout.png";
import ft1 from "../../../assets/kalai-port/ft1.png";
import per from "../../../assets/kalai-port/per.png";
import "./styles/Footer.scss";
import Mobilefooter from "./components/mobilefooter/Mobilefooter";
function Footer(props) {
    return (
        <>
            <div className="footer-section d-none d-lg-block">
                {/* <img src={footer1} className="footers" /> */}
                <div className="foter-nex-section">
                    <img src={footer2} className="footer-next" />
                </div>
                <div className="foters-nex">
                    <img src={footer3} className="anoter-footer" />
                </div>
                <div className="persons">
                    <img src={persons} className="person-layout" />
                </div>
                <div className="ft2">
                    <img src={ft1} className="ft2" />
                </div>
                <div className="per">
                    <img src={per} className="pers" />
                </div>
                <div className="box-footers">
                    <div className="button-homes">
                        <a href="#home">Home</a>
                    </div>
                    <div className="button-aboutuss">
                        <a href="#aboutus">AboutUs</a>
                    </div>
                    <div className="button-servicess">
                        <a href="#service">Services</a>
                    </div>
                    <div className="button-contacts">
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
            <div>
                <Mobilefooter />
            </div>
        </>
    );
}

export default Footer;
