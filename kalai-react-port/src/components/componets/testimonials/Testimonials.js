import React, { Component } from "react";
import per1 from "../../../assets/kalai-port/per1.png";
import per2 from "../../../assets/kalai-port/per2.png";
import per3 from "../../../assets/kalai-port/per3.png";
import per10 from "../../../assets/kalai-port/per10.png";
import per44 from "../../../assets/kalai-port/per44.png";
import per55 from "../../../assets/kalai-port/per55.png";
import per66 from "../../../assets/kalai-port/per66.png";
import per77 from "../../../assets/kalai-port/per77.png";
import per88 from "../../../assets/kalai-port/per88.png";
import per99 from "../../../assets/kalai-port/per99.png";
import wrok1 from "../../../assets/kalai-port/work1.png";
import wrok2 from "../../../assets/kalai-port/work2.png";
import wrok3 from "../../../assets/kalai-port/work4.png";
import wrok5 from "../../../assets/kalai-port/work5.png";
import wrok6 from "../../../assets/kalai-port/work6.png";
import wrok7 from "../../../assets/kalai-port/work7.png";
import wrok8 from "../../../assets/kalai-port/work8.png";
import wrok9 from "../../../assets/kalai-port/work9.png";
import wrok10 from "../../../assets/kalai-port/work10.png";
import wrok11 from "../../../assets/kalai-port/wok13.png";

import "./styles/Testimonials.scss";
import TextPage from "./components/textpage/TextPage";
import rockets from "../../../assets/kalai-port/rocpersons.png";

export default class Testimonials extends Component {
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
                <div className="slideshow-container" id="acitivities">
                    <h1 className="ms-5 mt-3 my">
                        My <span style={{ color: this.props.color }}>Activities</span>
                    </h1>
                    <div className="inside-box">
                        <div className="left">
                            <div className="box my-auto">
                                <img
                                    src={
                                        this.state.images[
                                            this.state.currentImage
                                        ]
                                    }
                                    alt="cleaning images"
                                    className="image-persons"
                                />
                            </div>
                            <div className="rocks">
                                <img src={rockets} className="per-rockets" />
                            </div>
                        </div>
                        <div className="right-contents">
                            <TextPage color={this.props.color}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
