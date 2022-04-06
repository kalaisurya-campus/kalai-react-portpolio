import { Modal } from "bootstrap";
import React, { useState, useRef } from "react";
import "./styles/Section4.scss";
import data from "./Data";
import Slider from "react-slick";
import Next from "./next/Next";
import Pre from "./pre/Pre";
import offsetslefts from "../../../assets/kalai-port/offset-left.png";
import rightoffset from "../../../assets/kalai-port/offset.png";
import star from "../../../assets/kalai-port/star.png";
function Section4(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <Next />,
        prevArrow: <Pre />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },

            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

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
        data.project.forEach((element) => {
            console.log(element);
            if (element.id === id) {
                SetIMagesArt(element);
                showModal();
            }
        });
    };

    return (
        <>
            <div className="section4">
                <h1 className="mb-5 projects mb-5">Projects</h1>
                <img src={offsetslefts} className="off-sets" />
                <div className="container slik-sliders my-auto mt-5">
                    <Slider {...settings}>
                        {data.project.map((items, index) => {
                            return (
                                <div
                                    className="slide-inside my-auto h-100"
                                    key={index}
                                >
                                    <div className="card col-lg-11 col-xs-12">
                                        <img
                                            src={items.image}
                                            class="card-img-top"
                                            alt={items.title}
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title mb-4">
                                                {items.title}
                                            </h5>
                                            <p class="card-text mb-4">
                                                {items.description}
                                            </p>
                                            <button
                                                className="buttonss mb-5"
                                                onClick={() =>
                                                    handleimage(items.id)
                                                }
                                            >
                                                {items.button}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
                <img src={rightoffset} className="offsets-right" />
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
                                Portfolio Art Images
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
                            <img src={Artemptyimage.image} className="w-50" />
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

export default Section4;
