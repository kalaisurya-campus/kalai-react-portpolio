import React, { useState, useRef } from "react";
import { Modal } from "bootstrap";
import createimag from "./Creativeimages";
import star from "../../../../../assets/kalai-port/star.png";
import "./styles/Creative.scss";
function Creative(props) {
    const [Creativeemptyimage, SetIMagesCreative] = useState([]);

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
        createimag.crateimagedata.forEach((element) => {
            console.log(element);
            if (element.id === id) {
                SetIMagesCreative(element);
                showModal();
            }
        });
    };
    return (
        <>
            <div className="cretive-main">
                <div className="container mt-5">
                    <div className="row justify-content-center gap-5 mb-1 h-100">
                        {createimag.crateimagedata.map((items, index) => {
                            return (
                                <div
                                    class="card col-lg-3 col-md-6 col-sm-11 gap-5 mb-2 ms-4"
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
                            <img
                                src={Creativeemptyimage.image}
                                className="w-100"
                            />
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

export default Creative;
