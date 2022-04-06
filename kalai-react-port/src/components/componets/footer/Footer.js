import React from "react";
import footer1 from "../../../assets/kalai-port/f1.svg";
import footer2 from "../../../assets/kalai-port/f2.svg";
import footer3 from "../../../assets/kalai-port/f3.svg";
import persons from "../../../assets/kalai-port/paerson_layout.png";
import ft1 from "../../../assets/kalai-port/ft1.png";
import per from "../../../assets/kalai-port/per.png";
import "./styles/Footer.scss";
function Footer(props) {
    return (
        <div className="footer-section">
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
        </div>
    );
}

export default Footer;
