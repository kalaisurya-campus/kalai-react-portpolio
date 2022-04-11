import React, { useState, useRef } from "react";
import imagedata from "./Imagedata";
import { Modal } from "bootstrap";
import star from "../../../../../assets/kalai-port/star.png";
import "./styles/Everything.scss";
function Everything(props) {
    const [emptyimage, SetIMages] = useState([]);

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
        imagedata.images.forEach((element) => {
            console.log(element);
            if (element.id === id) {
                SetIMages(element);
                showModal();
            }
        });
    };
    return (
        <>
            <div className="main-ever">
                <div className="container mt-5 ">
                    <div className="row justify-content-center gap-5 mb-5 h-100">
                        {imagedata.images.map((items, index) => {
                            return (
                                <div
                                    class="card col-lg-3 col-md-10 col-sm-11 col-xs-12 gap-5 mb-4"
                                    key={index}
                                >
                                    <img
                                        src={items.image}
                                        class="card-img-top"
                                        alt="No Images...."
                                        onClick={() => handleimage(items.id)}
                                    />
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
                                Portfolio Images
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
                            <div className="stars mb-5">
                                <img src={star} className="stars" />
                            </div>
                            <img src={emptyimage.image} className="w-100" />
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

export default Everything;
