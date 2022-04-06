import React, { useState } from "react";
import Art from "./components/art/Art";
import Creative from "./components/creative/Creative";
import Designs from "./components/design/Designs";
import Everything from "./components/everything/Everything";
import "./styles/Section5.scss";
function Section5(props) {
    const [index, SetIndex] = useState(0);
    return (
        <div className="section5">
            <h1 className="port mt-4 mb-5">Portfolio</h1>
            <div className="container tabs">
                <div className="tablist">
                    <div
                        className={`tabHead ${index == 0 ? "active" : "null"}`}
                        onClick={() => {
                            SetIndex(0);
                        }}
                    >
                        Everything
                    </div>
                    <div
                        className={`tabHead ${index == 1 ? "active" : "null"}`}
                        onClick={() => {
                            SetIndex(1);
                        }}
                    >
                        Art
                    </div>
                    <div
                        className={`tabHead ${index == 2 ? "active" : "null"}`}
                        onClick={() => {
                            SetIndex(2);
                        }}
                    >
                        Creative
                    </div>
                    <div
                        className={`tabHead ${index == 3 ? "active" : "null"}`}
                        onClick={() => {
                            SetIndex(3);
                        }}
                    >
                        Design
                    </div>
                </div>
                <div className="tabContent" hidden={index != 0}>
                    <Everything />
                </div>
                <div className="tabContent" hidden={index != 1}>
                    {" "}
                    <Art />
                </div>
                <div className="tabContent" hidden={index != 2}>
                    {" "}
                    <Creative />
                </div>
                <div className="tabContent" hidden={index != 3}>
                    <Designs />
                </div>
            </div>
        </div>
    );
}

export default Section5;
