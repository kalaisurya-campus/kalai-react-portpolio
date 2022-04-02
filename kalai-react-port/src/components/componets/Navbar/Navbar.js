import React from "react";
import "./styles/Navbar.scss";
function Navbar({ dark, setdark }) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Kalaisurya</a>
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
                                <a class="nav-link">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Aboutus</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Contact</a>
                            </li>
                        </ul>
                        <div class="d-flex gap-2">
                            <span className="mt-2">Login</span>
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
            </nav>
        </div>
    );
}

export default Navbar;
