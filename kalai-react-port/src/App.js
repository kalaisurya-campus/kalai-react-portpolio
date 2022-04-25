import { useEffect, useState } from "react";

import "./App.scss";
import { CirclePicker } from "react-color";
import Tippy from "@tippyjs/react";

import Layoutssectios from "./components/Layoutssectios";
import settings from "./assets/kalai-port/settings.png";

function App() {
    const [colors, SetColors] = useState([]);
    const setthemmes = () => {
        return JSON.parse(localStorage.getItem("themes"));
    };
    const [dark, SetDark] = useState(setthemmes());
    useEffect(() => {
        localStorage.setItem("themes", JSON.stringify(dark));
    }, [dark]);

    return (
        <div className={dark ? "theme--dark" : "theme--light"}>
            <div className="box-app">
                <Tippy
                    interactive={true}
                    content={
                        <CirclePicker
                            color={colors}
                            onChangeComplete={(color) => SetColors(color.hex)}
                        />
                    }
                >
                    <div>
                        <img src={settings} className="settings" />
                    </div>
                </Tippy>
            </div>
            <div className="port-polio">
                {/* <button onClick={() => SetDark(!dark)}>Cick</button> */}
                <Layoutssectios dark={dark} setdark={SetDark} color={colors}/>
            </div>
        </div>
    );
}

export default App;
