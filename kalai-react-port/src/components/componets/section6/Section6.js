import { Modal } from "bootstrap";
import React, { useState, useRef } from "react";
import Imagesection6 from "./Sectionimages";
import ap1 from "../../../assets/kalai-port/pa1.png";
import ap2 from "../../../assets/kalai-port/pa2.png";
import bikeline from "../../../assets/kalai-port/bike.gif";
import "./styles/Section6.scss";
function Section6({ color }) {
    const [Artemptyimage, SetIMagesArt] = useState([]);

    const useref = useRef(null);
    const showModal = () => {
        const modalEle = useref.current;
        const bsModal = new Modal(modalEle, {
            backdrop: "static",
            keyboard: false,
        });
        bsModal.show();
    };

    const hideModal = () => {
        const modalEle = useref.current;
        const bsModal = Modal.getInstance(modalEle);
        bsModal.hide();
    };
    const handleimage = (id) => {
        Imagesection6.imagesection6.forEach((element) => {
            console.log(element);
            if (element.id === id) {
                SetIMagesArt(element);
                showModal();
            }
        });
    };
    return (
        <>
            <div className="section6">
                <h1 className="latest mb-2">
                    <span style={{ color: color, fontWeight: 700 }}>
                        Latest
                    </span>{" "}
                    Post
                </h1>
                <div className="person-work">
                    <img src={ap1} className="pa1" />
                </div>
                <div className="persons">
                    <img src={ap2} className="pa2" />
                </div>
                <div className="container mt-5">
                    <div className="row justify-content-center gap-5 p-3">
                        {Imagesection6.imagesection6.map((items, index) => {
                            return (
                                <div
                                    class="cards col-lg-4 col-md-10 col-sm-11 gap-5"
                                    key={index}
                                    onClick={() => handleimage(items.id)}
                                >
                                    <img
                                        src={items.image}
                                        class="card-img-top mt-4"
                                        alt="No Images...."
                                    />
                                    <div class="card-bodys mt-3">
                                        <p class="card-text">{items.title}</p>
                                        <p className="day">{items.day}</p>
                                    </div>
                                    <div className="review">
                                        <button
                                            className="demo"
                                            style={{ backgroundColor: color }}
                                        >
                                            {items.description}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <p
                type="button"
                class="btn btn-primar"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            ></p>

            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                ref={useref}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                {Artemptyimage.title}
                            </h5>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div
                            class="modal-body"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                            }}
                        >
                            <div className="sta mb-5">
                                <img src={bikeline} className="sta-bike" />
                            </div>
                            <img src={Artemptyimage.image} className="w-100" />
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

export default Section6;
