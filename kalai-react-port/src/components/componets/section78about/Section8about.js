import React from "react";
import "./styles/Section8about.scss";
import name from "../../../assets/kalai-port/juice.png";
function Section8about(props) {
    return (
        <div className="abouts">
            <div className="inside-abouts">
                <div className="left-about">
                    <div className="empty-round"></div>

                    <img src={name} className="persons" />
                    <div className="empty-round"></div>
                </div>
                <div className="right-about my-auto">
                    <div className="content-about">
                        <h1 className="mt-5">
                            ABOUT <span className="me">ME</span>
                        </h1>
                        <p className="p-split mt-2">
                            <span className="myname">My Name Is</span>
                            <span className="surya">Kalaisurya</span>
                        </p>
                        <p className="is mt-2">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text. It has survived not
                            only five centuries, but also the leap into
                            electronic typesetting, remaining essentially
                            unchanged.
                        </p>
                    </div>
                    <div className="inside-text-about mt-2">
                        <div className="row ms-2">
                            <div className="cards col-lg-6 col-sm-11 col-md-11 mt-5">
                                <p>
                                    <span className="age-text">Age</span> :{" "}
                                    <span className="age-texts">23</span>
                                </p>
                                <p>
                                    <span className="age-text">Gender</span>:
                                    <span className="age-texts">Male</span>
                                </p>
                                <p>
                                    <span className="age-text">Experience</span>
                                    :<span className="age-texts">1 Years</span>
                                </p>
                                <p>
                                    <span className="age-text">Freelance</span>:
                                    <span className="age-texts">Available</span>
                                </p>
                            </div>
                            <div className="cards col-lg-6 col-sm-11 col-md-11 mt-5">
                                <p>
                                    <span className="age-text">Language</span>:
                                    <span className="age-texts">
                                        Telugu/Tamil/English
                                    </span>
                                </p>
                                <p>
                                    <span className="age-text">Phone</span>:
                                    <span className="age-texts">
                                        +91 877-837-7119
                                    </span>
                                </p>
                                <p>
                                    <span className="age-text">Email</span>:
                                    <span className="age-texts">
                                        kalaimca685@gmail.com
                                    </span>
                                </p>
                                <p>
                                    <span className="age-text">Address</span>:
                                    <span className="age-texts">
                                        Krishnagiri
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section8about;
