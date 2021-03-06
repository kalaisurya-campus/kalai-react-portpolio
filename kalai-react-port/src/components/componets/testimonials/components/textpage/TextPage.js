import React, { Component } from "react";
import "./styles/TextPage.scss";
import groups from "../../../../../assets/kalai-port//grup1.png";
import rockets from "../../../../../assets/kalai-port/rocpersons.png";
import MOdalPopup from "../modal/MOdalPopup";
export default class TextPage extends Component {
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            currentImage: 0,
            texts: [
                "MUSIC",
                "SCOOTERING",
                "MUSIC",
                "TRAVELLING",
                "WAITING",
                "STANDING",
                "POWER",
                "COFFEE",
                "SEARCHING",
                "WAITING",
                "WORKING",
                "LAPPTOPGAMGES",
                "HAPPYWORK",
                "STRONGPAERSON",
                "SOCIALMEDIAS",
                "WORKPERSON",
                "HAPPYSMILE",
                "YOGA",
                "RELAX",
                "GOOD",
                "HAPPY",
                "KEEPSMILE",
                "COOL",
                "ALL WAYS SMILE",
                "GOOD PERSON",
                "KNOWLEDGE",
            ],
        };
    }
    switchImage() {
        if (this.state.currentImage < this.state.texts.length - 1) {
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
            <div className="text">
                <div className="inside-texts">
                    <p
                        className="text-sizes mb-3 mt-5"
                        style={{ color: this.props.color }}
                    >
                        {this.state.texts[this.state.currentImage]}
                    </p>

                    <p
                        className="loreams-text mt-3 mb-5"
                        style={{ lineHeight: "1.8" }}
                    >
                        Loream Include these activities in{" "}
                        <span
                            style={{ color: this.props.color }}
                            className="ms-3"
                        >
                            job-related skills and maturity and they can be a
                        </span>
                        <span className="ms-2">
                            huge help when you???re lacking job experience.
                        </span>
                        <span style={{ color: this.props.color }}>
                            {" "}
                            Sports,Travelling,Movies
                        </span>
                    </p>

                    <div className="buttons">
                        <MOdalPopup color={this.props.color} />
                    </div>
                    {/* <div className="images">
                        <img src={groups} className="bottom-imageds" />
                    </div> */}
                </div>
            </div>
        );
    }
}
