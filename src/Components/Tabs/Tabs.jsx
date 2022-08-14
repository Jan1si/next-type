import Slider from "../Slider/Slider";
import Button from "./Button";
import classes from "./Tabs.module.css";
import React, { useState, useEffect } from "react";

function Tabs() {

    // Получение даных с API
    const baseUrl = "https://my-json-server.typicode.com/glebov-g/frontend-fake-db/categories";
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(baseUrl)
            .then(responce => responce.json())
            .then(dataJson => setData(dataJson))
    }, []);



    const [toggleState, setToggleState] = useState(1);

    function toggleTab(e) {
        setToggleState(e.target.tabIndex);
    }

    return (
        <div className={classes.tabs__conteiner}>
            <div className={classes.tabs__header}>
                <ul className={classes.tabs__buttons}>
                    {data.map((item) => (
                        <Button tabIndex={item.id} currentTab={toggleState} nameBtn={item.name} onClick={() => toggleTab} />
                    ))}
                </ul>
            </div>
            <div className={classes.tabs__body}>
                {data.map((item) => (
                    <Slider tabIndex={item.id} currentTab={toggleState} onClick={() => toggleTab}/>
                ))}
            </div>
        </div>
    );
}

export default Tabs;