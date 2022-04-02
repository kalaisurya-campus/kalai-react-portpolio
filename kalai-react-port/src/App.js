import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";
import Section1 from "./components/componets/section1/Section1";
import Layoutssectios from "./components/Layoutssectios";

function App() {
    const setthemmes = () => {
        return JSON.parse(localStorage.getItem("themes"));
    };
    const [dark, SetDark] = useState(setthemmes());
    useEffect(() => {
        localStorage.setItem("themes", JSON.stringify(dark));
    }, [dark]);

    return (
        <div className={dark ? "theme--dark" : "theme--light"}>
            <div className="port-polio">
                {/* <button onClick={() => SetDark(!dark)}>Cick</button> */}
                <Layoutssectios dark={dark} setdark={SetDark} />
            </div>
        </div>
    );
}

export default App;
