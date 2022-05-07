import React from "react";
import Homepagechat from "./componets/chatapp/hompagechat/Homepagechat";

import Footer from "./componets/footer/Footer";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/profile/Profile";
import Section1 from "./componets/section1/Section1";
import Section2 from "./componets/section2/Section2";
import Section4 from "./componets/section4/Section4";
import Section5 from "./componets/section5/Section5";
import Section6 from "./componets/section6/Section6";
import Section7 from "./componets/section7/Section7";
import Section8about from "./componets/section78about/Section8about";
import ServicesPages from "./componets/Servicessection2/ServicesPages";
import Testimonials from "./componets/testimonials/Testimonials";
import TopButton from "./componets/topbutton/TopButton";
import "./Layoutsection.scss";
function Layoutssectios({ dark, setdark, color }) {
    return (
        <div
            style={{
                height: "100%",
                width: "100%",
            }}
        >
            <Navbar dark={dark} setdark={setdark} color={color} />
            <Section1 color={color} />
            {/* <Section2 color={color} /> */}
            <ServicesPages color={color} />
            <Section8about color={color} />
            <Profile color={color} />
            <Section4 color={color} />
            <Section5 color={color} />
            <Section6 color={color} />
            <Testimonials color={color} />
            <Section7 color={color} />
            <Homepagechat color={color} />
            <Footer color={color} />
            <TopButton />
      
        </div>
    );
}

export default Layoutssectios;
