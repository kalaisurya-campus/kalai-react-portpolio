import React, { Component } from "react";
import per1 from "../../../../../assets/kalai-port/per1.png";
import per2 from "../../../../../assets/kalai-port/per2.png";
import per3 from "../../../../../assets/kalai-port/per3.png";
import per10 from "../../../../../assets/kalai-port/per10.png";
import per44 from "../../../../../assets/kalai-port/per44.png";
import per55 from "../../../../../assets/kalai-port/per55.png";
import per66 from "../../../../../assets/kalai-port/per66.png";
import per77 from "../../../../../assets/kalai-port/per77.png";
import per88 from "../../../../../assets/kalai-port/per88.png";
import per99 from "../../../../../assets/kalai-port/per99.png";
import wrok1 from "../../../../../assets/kalai-port/work1.png";
import wrok2 from "../../../../../assets/kalai-port/work2.png";
import wrok3 from "../../../../../assets/kalai-port/work4.png";
import wrok5 from "../../../../../assets/kalai-port/work5.png";
import wrok6 from "../../../../../assets/kalai-port/work6.png";
import wrok7 from "../../../../../assets/kalai-port/work7.png";
import wrok8 from "../../../../../assets/kalai-port/work8.png";
import wrok9 from "../../../../../assets/kalai-port/work9.png";
import wrok10 from "../../../../../assets/kalai-port/work10.png";
import wrok11 from "../../../../../assets/kalai-port/wok13.png";

import rockets from "../../../../../assets/kalai-port/rocpersons.png";
import "./styles/MOdals.scss";
export default class MOdalPopup extends Component {
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            currentImage: 0,
            images: [
                per1,
                per2,
                per3,
                per10,
                per44,
                per55,
                per66,
                per77,
                per88,
                per99,
                wrok1,
                wrok2,
                wrok3,
                wrok5,
                wrok6,
                wrok7,
                wrok8,
                wrok9,
                wrok10,
                wrok11,
            ],
        };
    }
    switchImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
            this.setState({
                currentImage: this.state.currentImage + 1,
            });
        } else {
            this.setState({
                currentImage: 0,
            });
        }
        return this.currentImage;
    }

    componentDidMount() {
        setInterval(this.switchImage, 1000);
    }

    render() {
        return (
            <>
                <button
                    type="button"
                    class="reads-btn ms-3"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop13"
                >
                    <span style={{ color: this.props.color }}> Read</span>{" "}
                    More...
                </button>

                <div
                    class="modal fade"
                    id="staticBackdrop13"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="staticBackdropLabel"
                                    style={{ color: this.props.color }}
                                >
                                    Activities
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <img
                                    src={
                                        this.state.images[
                                            this.state.currentImage
                                        ]
                                    }
                                    alt="cleaning images"
                                    className="image-perso"
                                    style={{
                                        width: "80%",
                                    }}
                                />

                                <p
                                    className="loreams-text mt-3 mb-5"
                                    style={{ width: "100%", fontSize: "20px" }}
                                >
                                    Loream Include these activities in{" "}
                                    <span style={{ color: this.props.color }} >
                                        job-related skills and maturity and they
                                        can be a
                                    </span>
                                    huge help when you’re lacking job
                                    experience.
                                    <span style={{ color: this.props.color }}>
                                        {" "}
                                        Sports,Travelling,Movies
                                    </span>
                                </p>
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
            </>
        );
    }
}
