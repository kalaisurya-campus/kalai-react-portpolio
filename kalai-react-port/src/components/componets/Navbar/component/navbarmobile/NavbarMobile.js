import React from "react";
import "./styles/NavbarMobile.scss";
function NavbarMobile({ dark, setdark }) {
    return (
        <div className="mobile navbar d-block d-lg-none">
            <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight1"
                aria-controls="offcanvasRight"
            >
                Click
            </button>

            <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasRight1"
                aria-labelledby="offcanvasRightLabel"
            >
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                    <button
                        type="button"
                        class="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
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
                    <div class="d-flex gap-2">
                        <span className="mt-2">Login</span>
                        {/* <button
                                    onClick={() => usehistory.push("/chat")}
                                >
                                    chat
                                </button> */}

                        <button
                            className="darks"
                            onClick={() => setdark(!dark)}
                        >
                            {dark ? (
                                <ion-icon name="moon-outline"></ion-icon>
                            ) : (
                                <ion-icon name="sunny-outline"></ion-icon>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarMobile;
