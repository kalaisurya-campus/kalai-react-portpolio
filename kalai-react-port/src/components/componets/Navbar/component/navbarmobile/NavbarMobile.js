import React from "react";
import "./styles/NavbarMobile.scss";
import darkmode from "../../../../../assets/kalai-port/darkmode.png";
import lightmode from "../../../../../assets/kalai-port/lightmode.png";
function NavbarMobile({ dark, setdark }) {
    return (
        <div className="mobile navbar d-block d-lg-none">
            <div className="inside-navbars d-flex justify-content-between ms-3">
                <h1 className="mt-2">Hi Guy's</h1>
                <span
                    class="btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight1"
                    aria-controls="offcanvasRight"
                >
                    <ion-icon
                        name="reorder-four-outline"
                        style={{
                            width: "40px",
                            height: "40px",
                            float: "right",
                            color: "orange",
                            fontWeight: "800",
                        }}
                    ></ion-icon>
                </span>

                <div
                    class="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offcanvasRight1"
                    aria-labelledby="offcanvasRightLabel"
                >
                    <div class="offcanvas-header">
                        <h1>Hi!</h1>
                        <button
                            type="button"
                            class="btn-close text-rese"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            style={{
                                color: "orange",
                                fontWeight: "800",
                            }}
                        ></button>
                    </div>
                    <div class="offcanvas-body">
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
                        <div class="d-flexs gap-2">
                            <div className="d-flexs">
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
                                <span>
                                    {dark ? (
                                        <p>Dark Mode</p>
                                    ) : (
                                        <p>Light Mode</p>
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarMobile;
