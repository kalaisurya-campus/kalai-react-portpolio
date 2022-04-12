import React, { useEffect, useState } from "react";
import rotes from "../../../assets/kalai-port/btomboot.png";
import "./styles/TopButton.scss";
function TopButton(props) {
    const [backbutton, SetBackButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10200) {
                SetBackButton(true);
            } else {
                SetBackButton(false);
            }
        });
    }, []);
    const scrollup = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <div className="scrolls-buttons d-none d-lg-block d-sm-none">
                {backbutton && (
                    <div onClick={scrollup}>
                        <img src={rotes} className="toprotest" />
                    </div>
                )}
            </div>
        </>
    );
}

export default TopButton;
