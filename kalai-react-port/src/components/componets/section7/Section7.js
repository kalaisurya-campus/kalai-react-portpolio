import React from "react";
import "./styles/Section7.scss";
import contact from "../../../assets/kalai-port/contact.png";
import carousels from "../../../assets/kalai-port/carousels.png";
import google from "../../../assets/kalai-port/google.png";
import instagram from "../../../assets/kalai-port/instagram.png";
import twitter from "../../../assets/kalai-port/twitter.png";
import facebook from "../../../assets/kalai-port/facebook.png";
function Section7() {
    return (
        <div className="section7" id="contact">
            <div className="inside-contant">
                <div className="left-section7">
                    <img src={contact} className="contactimage mb-5" />
                    <div className="cotact-list mt-3">
                        <img src={google} className="google" />
                        <img src={facebook} className="google" />
                        <img src={instagram} className="google" />
                        <img src={twitter} className="google" />
                    </div>
                </div>
                <div className="right-section7 my-auto">
                    <img src={carousels} className="carousels" />
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
                            <label for="exampleInputEmail1" class="form-label">
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
    );
}

export default Section7;
