import React from "react";
import NavbarMobile from "./component/navbarmobile/NavbarMobile";
import { NavLink, useHistory } from "react-router-dom";
import "./styles/Navbar.scss";
import darkmode from "../../../assets/kalai-port/darkmode.png";
import lightmode from "../../../assets/kalai-port/lightmode.png";
function Navbar({ dark, setdark }) {
    const usehistory = useHistory();
    return (
        <>
            <div className="d-none d-lg-block">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <a class="navbar-brand">Hi Kalaisurya!</a>
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
                                    <a class="nav-link" href="#home">
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#aboutus">
                                        Aboutus
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#service">
                                        Services
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <div class="d-flexs">
                                {/* <span className="mt-2">Login</span> */}
                                {/* <button
                                    onClick={() => usehistory.push("/chat")}
                                >
                                    chat
                                </button> */}

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
                                    <div className="mt-2">
                                        <input
                                            type="checkbox"
                                            hidden="hidden"
                                            id="username"
                                            onClick={() => setdark(!dark)}
                                        />
                                        <label
                                            class="switch"
                                            for="username"
                                        ></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div>
                <NavbarMobile dark={dark} setdark={setdark} />
            </div>
        </>
    );
}

export default Navbar;
