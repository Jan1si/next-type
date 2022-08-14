import { useEffect, useState } from "react";
import classes from "./Slider.module.css";
import arrow from "./img/arrow.svg";
import Card from "./Card";

function Slider(props) {

    // Получение данных для карточек с API
    const baseUrl = "https://my-json-server.typicode.com/glebov-g/frontend-fake-db/items";
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(baseUrl)
            .then(respoce => respoce.json())
            .then(dataJson => setData(dataJson))
    }, []);

    return (
        <div
            tabIndex={props.tabIndex}
            className={`${classes.slider__container} ${props.tabIndex === props.currentTab ? classes.slider__container_active : " "}`}
        >
            <div className={classes.sliders__cards}>
                {data.map((item) => (
                    <Card  name={item.name} image={item.image} desc={item.description} tags={item.tags}/>
                ))}
                
            </div>
            <div className={classes.next__slide}>
                <img src={arrow} alt="" />
            </div>
            <div className={classes.prev__slide}>
                <img src={arrow} alt="" />
            </div>
        </div>
    );
}

export default Slider;