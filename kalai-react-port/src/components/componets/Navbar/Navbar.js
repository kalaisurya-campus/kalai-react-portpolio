import React, { useState } from "react";
import NavbarMobile from "./component/navbarmobile/NavbarMobile";
import { NavLink, useHistory } from "react-router-dom";
import "./styles/Navbar.scss";
import darkmode from "../../../assets/kalai-port/m2 dark.png";
import lightmode from "../../../assets/kalai-port/m1 light.png";
import sm5 from "../../../assets/kalai-port/sm5.png";
import { Link } from "react-scroll";

function Navbar({ dark, setdark, color }) {
    const [slots, SetSlots] = useState(false);

    const chageColorBack = () => {
        if (window.scrollY >= 20) {
            SetSlots(true);
        } else {
            SetSlots(false);
        }
    };
    window.addEventListener("scroll", chageColorBack);
    return (
        <>
            <div className="d-none d-lg-block">
                <nav
                    className={
                        slots
                            ? "navbar active"
                            : "navbar navbar-expand-lg navbar-light"
                    }
                >
                    <div class="container-fluid">
                        <h1
                            style={{ color: color, fontWeight: 700 }}
                            className="his"
                        >
                            Hi Guy's!
                            <span>
                                <img
                                    src={sm5}
                                    style={{
                                        width: "50px",

                                        transform: "rotate(-20deg)",
                                        objectFit: "cover",
                                    }}
                                />
                            </span>
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
                            <ul class="navbar-nav ms-auto mb-2 gap-5">
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
                                    <Link class="nav-link" to="profile">
                                        <span style={{ color: color }}>
                                            Pro
                                        </span>
                                        file
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
                            <div className="d-flex">
                                <span
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
                                </span>
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
