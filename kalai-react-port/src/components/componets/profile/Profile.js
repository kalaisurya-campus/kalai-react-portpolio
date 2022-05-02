import React from "react";
import "./styles/Profiles.scss";
import pts from "../../../assets/kalai-port/pts.png";
import campus from "../../../assets/kalai-port/campus.png";
import kalaidream from "../../../assets/kalai-port/kalaidream.png";
import shop from "../../../assets/kalai-port/shop.png";
import thoughtplay from "../../../assets/kalai-port/thought_play.png";
import eternosft from "../../../assets/kalai-port/eternosotfs.png";
import box1 from "../../../assets/kalai-port/box.png";
import git from "../../../assets/kalai-port/git.png";
import face from "../../../assets/kalai-port/faces.png";
import linked from "../../../assets/kalai-port/lin.png";
function Profile({ color }) {
    return (
        <div className="profile-page" id="profile">
            <div className="insode-profile-page">
                <div className="left-profile-page">
                    <div className="top_content_title">
                        <h3 className="mt-3 ms-5">
                            Projects{" "}
                            <span style={{ color: color, fontWeight: 700 }}>
                                Experience
                            </span>
                        </h3>
                    </div>
                    <div className="middle_content_image">
                        <img src={pts} alt="no images" className="no_images" />
                    </div>
                    <div className="bottom_contne_names">
                        <div className="inside_links mt-3">
                            <div className="links_1">
                                <a
                                    href="https://www.linkedin.com/in/kalaisurya-g-3253a81b1/"
                                    className="links_class"
                                >
                                    <img src={linked} className="lins" />
                                </a>
                                <h5
                                    style={{ color: color, fontWeight: 700 }}
                                    className="mb-4"
                                >
                                    Linked IN
                                </h5>
                            </div>
                            <div className="links_1">
                                <a
                                    href="https://www.facebook.com/"
                                    className="links_class"
                                >
                                    <img src={face} className="faces" />
                                </a>
                                <h5
                                    style={{ color: color, fontWeight: 700 }}
                                    className="mb-4"
                                >
                                    Facebook
                                </h5>
                            </div>
                            <div className="links_1">
                                <a
                                    href="https://github.com/"
                                    className="links_class"
                                >
                                    <img src={git} className="gits" />
                                </a>
                                <h5
                                    style={{ color: color, fontWeight: 700 }}
                                    className="mb-4"
                                >
                                    GitHub
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-profile-page">
                    <h3 className="mt-3 ms-3">
                        Pro
                        <span style={{ color: color, fontWeight: 700 }}>
                            jects
                        </span>
                    </h3>
                    <div className="card-list">
                        <div className="box1-cards mb-5 mt-3">
                            <div className="content_box">
                                <img src={campus} className="campus w-100" />
                                <h5 className="mb-3 mt-5">
                                    Campus{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        Avenue
                                    </span>
                                </h5>
                            </div>
                            <div className="another_box_content">
                                <img src={campus} className="w-100" />
                                <p>
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                            marginRight: "8px",
                                        }}
                                    >
                                        Campus Avenue Developed
                                    </span>
                                    web app for College management system that
                                    includes Maintaining.
                                </p>
                            </div>
                        </div>
                        <div className="box1-cards mt-3 mb-5">
                            <div className="content_box">
                                <img src={kalaidream} className="campuss" />
                                <h5 className="mb-5 mt-2">
                                    Dream{" "}
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        Your JObs
                                    </span>
                                </h5>
                            </div>
                            <div className="another_box_content">
                                <img src={kalaidream} className="w-50" />
                                <p>
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                            marginRight: "6px",
                                        }}
                                    >
                                        Dream YourJobs Developed
                                    </span>{" "}
                                    web app for College management system that
                                    includes Maintaining.
                                </p>
                            </div>
                        </div>
                        <div className="box1-cards mb-5 mt-3">
                            <div className="content_box">
                                <img src={shop} className="campused" />
                                <h5 className="mb-5">
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        E-commerce
                                    </span>
                                </h5>
                            </div>
                            <div className="another_box_content">
                                <img src={shop} className="w-100" />
                                <p>
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                            marginRight: "6px",
                                        }}
                                    >
                                        Ecommerce Developed
                                    </span>{" "}
                                    web app for College management system that
                                    includes Maintaining.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-list">
                        <div className="box1-cards mb-4 mt-3">
                            <div className="content_box">
                                <img
                                    src={thoughtplay}
                                    className="campus-thought"
                                />
                                <h5 className="mb-5 mt-5">
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                        }}
                                    >
                                        Thought
                                    </span>
                                    Play
                                </h5>
                            </div>
                            <div className="another_box_content">
                                <img src={thoughtplay} className="thoughts" />
                                <p className="">
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                            marginRight: "6px",
                                        }}
                                    >
                                        ThoughtPlay Developed
                                    </span>{" "}
                                    web app for College management system that
                                    includes Maintaining.
                                </p>
                            </div>
                        </div>
                        <div className="box1-cards mb-4 mt-3">
                            <div className="content_box">
                                <img
                                    src={eternosft}
                                    className="campuss w-100"
                                />
                                <h5
                                    className="mb-5"
                                    style={{
                                        color: color,
                                        fontWeight: 700,
                                    }}
                                >
                                    Eternosft
                                </h5>
                            </div>
                            <div className="another_box_content">
                                <img src={eternosft} className="w-100" />
                                <p>
                                    <span
                                        style={{
                                            color: color,
                                            fontWeight: 700,
                                            marginRight: "6px",
                                        }}
                                    >
                                        Eternosft Developed
                                    </span>{" "}
                                    web app for College management system that
                                    includes Maintaining.
                                </p>
                            </div>
                        </div>
                        <div className="box1-cards mb-4 mt-3">
                            <div className="content_box">
                                <img src={box1} className="campused" />
                                <h5></h5>
                            </div>
                            <div className="another_box_content">
                                <img src={box1} className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
