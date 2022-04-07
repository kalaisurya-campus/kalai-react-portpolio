import React, { Component } from "react";
import "./styles/TextPage.scss";
import groups from "../../../../../assets/kalai-port//grup1.png";
import rockets from "../../../../../assets/kalai-port/rocpersons.png";
export default class TextPage extends Component {
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            currentImage: 0,
            images: [
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
                "LAPPTOPgAMGES",
                "HAPPYWORK",
                "STRONGPAERSON",
                "SOCIALMEDIAS",
                "WORKPERSON",
                "HAPPYSMILE",
                "YOGA",
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
            <div className="text">
                {/* {this.state.images[this.state.currentImage]} */}
                <div className="inside-texts">
                    <p className="text-sizes">
                        {this.state.images[this.state.currentImage]}
                    </p>
                    <p className="loreams-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vulputate diam molestie pellentesque pulvinar sapien,
                        sed viverra.
                    </p>
                    <div className="images">
                        <img src={groups} className="bottom-imageds" />
                    </div>
                    <div className="buttons">
                        <button className="reads">Read More...</button>
                    </div>
                </div>
            </div>
        );
    }
}
