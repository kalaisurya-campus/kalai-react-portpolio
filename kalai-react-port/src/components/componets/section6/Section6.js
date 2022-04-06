import React from "react";
import Imagesection6 from "./Sectionimages";
import "./styles/Section6.scss";
function Section6(props) {
    return (
        <div className="section6">
            <h1 className="latest">Latest Post</h1>
            <div className="container mt-5">
                <div className="row justify-content-center gap-5 p-3">
                    {Imagesection6.imagesection6.map((items, index) => {
                        return (
                            <div
                                class="cards col-lg-4 col-md-10 col-sm-11 gap-5"
                                key={index}
                            >
                                <img
                                    src={items.image}
                                    class="card-img-top"
                                    alt="No Images...."
                                />
                                <div class="card-bodys mt-3">
                                    <p class="card-text">{items.title}</p>
                                    <p className="day">{items.day}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Section6;
