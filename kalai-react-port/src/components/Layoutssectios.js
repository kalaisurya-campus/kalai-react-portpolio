import React from "react";
import Navbar from "./componets/Navbar/Navbar";
import Section1 from "./componets/section1/Section1";
import Section2 from "./componets/section2/Section2";
import Section3 from "./componets/section3/Section3";

function Layoutssectios({ dark, setdark }) {
    return (
        <div>
            <Navbar dark={dark} setdark={setdark} />
            <Section1 />
            <Section2 />
            <Section3/>
        </div>
    );
}

export default Layoutssectios;
