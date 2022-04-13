import React from "react";
import "./styles/Section7.scss";
import contact from "../../../assets/kalai-port/contact.png";
import carousels from "../../../assets/kalai-port/carousels.png";
import google from "../../../assets/kalai-port/google.png";
import instagram from "../../../assets/kalai-port/instagram.png";
import twitter from "../../../assets/kalai-port/twitter.png";
import facebook from "../../../assets/kalai-port/facebook.png";
import address from "../../../assets/kalai-port/address.gif";
import phone from "../../../assets/kalai-port/phone.gif";
import email from "../../../assets/kalai-port/mail.gif";
import website from "../../../assets/kalai-port/website.gif";
function Section7() {
    return (
        <>
            <div className="section7" id="contact">
                <h1 className="ms-4 mt-2 mb-2">
                    Contact <span className="me-colors">ME</span>
                </h1>
                <div className="inside-contant">
                    <div className="left-section7">
                        {/* <img src={contact} className="contactimage mb-5" /> */}
                        <div className="boxes mt-3">
                            <div className="inside-boxes1">
                                <div className="row gap-5 justify-content-center">
                                    <div
                                        className="cardt"
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop"
                                    >
                                        <div className="location mt-3">
                                            <ion-icon
                                                name="location-outline"
                                                style={{
                                                    fontSize: "3rem",
                                                    color: "green",
                                                }}
                                            ></ion-icon>
                                        </div>
                                        <div className="texts mb-2">
                                            <h5>Address</h5>
                                            <p className="mails">
                                                Address,City,Street
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="cardt"
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop12"
                                    >
                                        <div className="phone mt-3">
                                            <ion-icon
                                                name="call-outline"
                                                style={{
                                                    fontSize: "3rem",
                                                    color: "green",
                                                }}
                                            ></ion-icon>
                                        </div>
                                        <div className="texts mb-2">
                                            <h5>Phone</h5>
                                            <p>+91 8778377119</p>
                                        </div>
                                    </div>
                                    <div
                                        className="cardt"
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop2"
                                    >
                                        <div className="mail mt-3">
                                            <ion-icon
                                                name="mail-outline"
                                                style={{
                                                    fontSize: "3rem",
                                                    color: "green",
                                                }}
                                            ></ion-icon>
                                        </div>
                                        <div className="texts mb-2">
                                            <h5>Mail</h5>
                                            <p className="mails">
                                                kalaimca685@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="cardt"
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop3"
                                    >
                                        <div className="browser mt-3">
                                            <ion-icon
                                                name="logo-xbox"
                                                style={{
                                                    fontSize: "3rem",
                                                    color: "green",
                                                }}
                                            ></ion-icon>
                                        </div>
                                        <div className="texts mb-2">
                                            <h5>Website</h5>
                                            <p>kalai-portpolio</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="cotact-list mt-3">
                        <img src={google} className="google" />
                        <img src={facebook} className="google" />
                        <img src={instagram} className="google" />
                        <img src={twitter} className="google" />
                    </div> */}
                        <div>
                            <img src={contact} className="contactimage mt-5" />
                        </div>
                    </div>
                    <div className="right-section7 my-auto">
                        <h1 className="mt-5">Contact</h1>
                        <form className="col-lg-6 mt-5 mb-5">
                            <div class="mb-3">
                                <label
                                    for="exampleInputUserName1"
                                    class="form-label"
                                >
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputUserName1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div class="mb-3 ">
                                <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleInputTextArea1"
                                    class="form-label"
                                >
                                    description
                                </label>
                                <input
                                    type="textarea"
                                    class="form-control"
                                    id="exampleInputTextArea1"
                                />
                            </div>

                            <button
                                type="submit"
                                class="btn btn-primarys mb-5 mt-4"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* address modal pop ups */}

            <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                                Address Animation
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <h1>Address</h1>
                            <img
                                src={address}
                                style={{
                                    width: "100%",
                                }}
                            />
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* end address popup */}

            {/* phone apge */}
            <div
                class="modal fade"
                id="staticBackdrop12"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                                Phone Animation
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <h1>Phone</h1>
                            <img
                                src={phone}
                                style={{
                                    width: "100%",
                                }}
                            />
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* end phone */}

            {/* mail moda;le */}

            <div
                class="modal fade"
                id="staticBackdrop2"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                                Mail Animation
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <h1>Mail</h1>
                            <img
                                src={email}
                                style={{
                                    width: "100%",
                                }}
                            />
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* mail end modeal */}

            {/* website modals */}

            <div
                class="modal fade"
                id="staticBackdrop3"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                                Website Animation
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <h1>Website</h1>
                            <img
                                src={website}
                                style={{
                                    width: "100%",
                                }}
                            />
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* website end modals */}
        </>
    );
}

export default Section7;
