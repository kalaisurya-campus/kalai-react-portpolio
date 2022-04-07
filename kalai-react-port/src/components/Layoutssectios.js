import React from "react";

import Footer from "./componets/footer/Footer";
import Navbar from "./componets/Navbar/Navbar";
import Section1 from "./componets/section1/Section1";
import Section2 from "./componets/section2/Section2";
import Section3 from "./componets/section3/Section3";
import Section4 from "./componets/section4/Section4";
import Section5 from "./componets/section5/Section5";
import Section6 from "./componets/section6/Section6";
import Section7 from "./componets/section7/Section7";
import Testimonials from "./componets/testimonials/Testimonials";
import TopButton from "./componets/topbutton/TopButton";

function Layoutssectios({ dark, setdark }) {
    return (
        <div>
            <Navbar dark={dark} setdark={setdark} />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Testimonials />
            <Section7 />
            <Footer />
            <TopButton />
          
        </div>
    );
}

export default Layoutssectios;
