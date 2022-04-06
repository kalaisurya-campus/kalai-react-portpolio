import React from "react";
import "./styles/Section7.scss";
import contact from "../../../assets/kalai-port/contact.png";
import carousels from "../../../assets/kalai-port/carousels.png";
function Section7(props) {
    return (
        <div className="section7" id="contact">
            <div className="inside-contant">
                <div className="left-section7">
                    <img src={contact} className="contactimage mb-5 mt-5" />
                </div>
                <div className="right-section7 my-auto">
                    <img src={carousels} className="carousels" />
                    <h1 className="mb-5">Contact</h1>
                    <form className="col-lg-6 mt-5">
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
                        <div class="mb-3">
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

                        <button type="submit" class="btn btn-primarys">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Section7;
