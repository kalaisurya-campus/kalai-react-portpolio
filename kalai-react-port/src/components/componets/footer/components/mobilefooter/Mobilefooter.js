import React from "react";
import "./styles/Mobilefooter.scss";
import footer2 from "../../../../../assets/kalai-port/f2.svg";
import footer3 from "../../../../../assets/kalai-port/f3.svg";
import persons from "../../../../../assets/kalai-port/paerson_layout.png";
import ft1 from "../../../../../assets/kalai-port/ft1.png";
import per from "../../../../../assets/kalai-port/per.png";
import { Link } from "react-scroll";
function Mobilefooter(props) {
    return (
        <div className="mobile-footer d-block d-lg-none">
            <div className="inside-footer">
                <div className="footer1-mobile">
                    <img src={footer2} className="mobile-footer2"></img>
                </div>
                <div className="footer2-mobile">
                    <img src={footer3} className="mobile-footer3" />
                </div>
                <div className="pershot">
                    <img src={per} className="per-person" />
                </div>
                <div className="footer-ft1">
                    <img src={ft1} className="person-ft1" />
                </div>
                <div className="footer-person-fot">
                    <img src={persons} className="foote-person" />
                </div>
                <div className="box-footer">
                    <div className="button-home">
                        <Link class="nav-link" to="home">
                            Home
                        </Link>
                    </div>
                    <div className="button-aboutus">
                        <Link class="nav-link" to="abouts">
                            AboutUs
                        </Link>
                    </div>
                    <div className="button-services">
                        <Link class="nav-link" to="service">
                            Services
                        </Link>
                    </div>
                    <div className="button-contact">
                        <Link class="nav-link" to="contact">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mobilefooter;
