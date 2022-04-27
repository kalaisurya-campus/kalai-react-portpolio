import React from "react";
import NavbarMobile from "./component/navbarmobile/NavbarMobile";
import { NavLink, useHistory } from "react-router-dom";
import "./styles/Navbar.scss";
import darkmode from "../../../assets/kalai-port/m2 dark.png";
import lightmode from "../../../assets/kalai-port/m1 light.png";

import { Link } from "react-scroll";

function Navbar({ dark, setdark, color }) {
    return (
        <>
            <div className="d-none d-lg-block">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <h1 style={{ color: color, fontWeight: 700 }}>
                            Hi Kalaisurya!
                        </h1>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
                                <li class="nav-item">
                                    <Link class="nav-link" to="home">
                                        <span style={{ color: color }}>Ho</span>
                                        me
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="service">
                                        <span style={{ color: color }}>
                                            Serv
                                        </span>
                                        ices
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="about">
                                        <span style={{ color: color }}>
                                            About
                                        </span>
                                        us
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="chat">
                                        <span style={{ color: color }}>Ch</span>
                                        at
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="contact">
                                        <span style={{ color: color }}>
                                            {" "}
                                            Cont
                                        </span>
                                        act
                                    </Link>
                                </li>
                            </ul>
                            <div class="d-flexs">
                                <div className="">
                                    <div
                                        className="dar"
                                        onClick={() => setdark(!dark)}
                                    >
                                        {dark ? (
                                            <img
                                                src={darkmode}
                                                className="darkst"
                                            />
                                        ) : (
                                            <img
                                                src={lightmode}
                                                className="darkst"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div>
                <NavbarMobile dark={dark} setdark={setdark} color={color} />
            </div>
        </>
    );
}

export default Navbar;
