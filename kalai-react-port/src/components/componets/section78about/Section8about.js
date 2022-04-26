import React from "react";
import "./styles/Section8about.scss";
import name from "../../../assets/kalai-port/juice.png";
import circle from "../../../assets/kalai-port/rotates.png";
import like1 from "../../../assets/kalai-port/like1.png";
import like2 from "../../../assets/kalai-port/like2.png";
function Section8about({ color }) {
    return (
        <div className="abouts" id="about">
            <div className="inside-abouts">
                <div className="left-about-first">
                    {/* <div className="empty-round"></div> */}
                    <div className="back">
                        <div className="image1">
                            <img src={name} className="persons" />
                        </div>
                        <div className="image2">
                            <img src={circle} className="rotates" />
                        </div>
                    </div>
                    {/* <div className="empty-round"></div> */}
                </div>
                <div className="right-about-second">
                    <div className="content-about">
                        <h1 className="mt-3">
                            ABOUT{" "}
                            <span style={{ color: color, fontWeight: 600 }}>
                                ME
                            </span>
                        </h1>
                        <p className="p-split mt-2">
                            <span className="myname">
                                My{" "}
                                <span style={{ color: color, fontWeight: 600 }}>
                                    Name Is
                                </span>
                            </span>
                            <span className="surya">Kalaisurya</span>
                        </p>
                        <p
                            className="is mt-2"
                            style={{
                                paddingLeft: "40px",
                                paddingRight: "40px",
                                textAlign: "center",
                            }}
                        >
                            Lorem ipsum dlor sit amet consectetur adipising
                            alit.Eaque eos volptatem eius dolorem maiores nihil
                            ducimus at rem ullam reprehenderit quidem quia
                            deserut,molestiae,eligendi amet repellat molestias
                            quos totam.
                        </p>
                    </div>
                    <div className="another-content-section">
                        <div className="box1">
                            <div className="left-box1">
                                <p>
                                    <span className="age-text">Age</span> :{" "}
                                    <span className="age-texts">23</span>
                                </p>
                                <p>
                                    <span className="age-text">Gender</span>:
                                    <span className="age-texts">Male</span>
                                </p>
                                <p>
                                    <span className="age-text">Developer</span>:
                                    <span className="age-texts">
                                        React{" "}
                                        <span style={{ color: color }}>
                                            Developer
                                        </span>
                                    </span>
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
                            <div className="right-box1">
                                <img src={like1} className="like1" />
                            </div>
                        </div>
                        <div className="box2">
                            <div className="left-box2">
                                <img src={like2} className="like1" />
                            </div>
                            <div className="right-box2">
                                <p>
                                    <span className="age-text">Language</span>:
                                    <span
                                        className="age-texts"
                                        style={{ color: color }}
                                    >
                                        Telugu/Tamil/English
                                    </span>
                                </p>
                                <p>
                                    <span className="age-text">Phone</span>:
                                    <span className="age-texts">
                                        +91 877-
                                        <span style={{ color: color }}>
                                            837
                                        </span>
                                        -7119
                                    </span>
                                </p>
                                <p>
                                    <span className="age-text">Email</span>:
                                    <span className="age-texts">
                                        <span style={{ color: color }}>
                                            kalaimca685@gmail
                                        </span>
                                        .com
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

                    {/* <div className="row ms-2">
                            <div className="cards col-lg-12 col-sm-11 col-md-11 col-xxxl-5 mt-5">
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
                            <div className="cardss d-flex col-lg-12 col-sm-11 col-md-11 col-xxxl-5 mt-5">
                                <div>
                                    <p>
                                        <span className="age-text">
                                            Language
                                        </span>
                                        :
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
                                        <span className="age-text">
                                            Address
                                        </span>
                                        :
                                        <span className="age-texts">
                                            Krishnagiri
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    {/* <div className="row">
                            <div className="inside-box-text d-flex justify-content-between">
                                <div className="firt-content">
                                    <div className="cards col-lg-12 col-sm-11 col-md-11 col-xxxl-5">
                                        <p>
                                            <span className="age-text">
                                                Age
                                            </span>{" "}
                                            :{" "}
                                            <span className="age-texts">
                                                23
                                            </span>
                                        </p>
                                        <p>
                                            <span className="age-text">
                                                Gender
                                            </span>
                                            :
                                            <span className="age-texts">
                                                Male
                                            </span>
                                        </p>
                                        <p>
                                            <span className="age-text">
                                                Experience
                                            </span>
                                            :
                                            <span className="age-texts">
                                                1 Years
                                            </span>
                                        </p>
                                        <p>
                                            <span className="age-text">
                                                Freelance
                                            </span>
                                            :
                                            <span className="age-texts">
                                                Available
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="second-content">
                                    <img src={like1} />
                                </div>
                            </div>
                            <div className="another-inside-content">
                                <div className="row">
                                    <div className="inside-another-languages d-flex justify-content-between">
                                        <div className="left-another-content">
                                            <img src={like2} />
                                        </div>
                                        <div className="right-another-content">
                                            <div className="cardss d-flex col-lg-12 col-sm-11 col-md-11 col-xxxl-5">
                                                <div>
                                                    <p>
                                                        <span className="age-text">
                                                            Language
                                                        </span>
                                                        :
                                                        <span className="age-texts">
                                                            Telugu/Tamil/English
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span className="age-text">
                                                            Phone
                                                        </span>
                                                        :
                                                        <span className="age-texts">
                                                            +91 877-837-7119
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span className="age-text">
                                                            Email
                                                        </span>
                                                        :
                                                        <span className="age-texts">
                                                            kalaimca685@gmail.com
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span className="age-text">
                                                            Address
                                                        </span>
                                                        :
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
                        </div> */}
                </div>
            </div>
        </div>
    );
}

export default Section8about;
