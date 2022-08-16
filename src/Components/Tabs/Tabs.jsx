import Slider from "./Slider/Slider";
import Button from "./Button";
import classes from "./Tabs.module.css";
import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import CardSkeleton from "./Slider/Card/CardSkeleton";
// import TabsSkeleton from "./TabsSkeleton";

function Tabs() {

    // Получение даных с API
    const baseUrlTabs = "https://my-json-server.typicode.com/glebov-g/frontend-fake-db/categories";
    const [dataTabs, setDataTabs] = useState([]);
    const [isLoadingTabs, setLoadingTabs] = useState(true);
    useEffect(() => {
        fetch(baseUrlTabs)
            .then(responce => responce.json())
            .then(dataJson => {
                setDataTabs(dataJson);
                setLoadingTabs(false);
            })
    }, []);


    // Получение данных для карточек в слайдере с API 
    const baseUrlSlider = "https://my-json-server.typicode.com/glebov-g/frontend-fake-db/items";

    // Вызов хука "useState" для объявления состояния  "data" 
    const [dataSlides, setDataSlides] = useState([]);
    const [isLoadingSlides, setLoadingSlides] = useState(true);

    // Вызов хука "useEffect" для получения данных из API
    useEffect(() => {
        fetch(baseUrlSlider)
            .then(respoce => respoce.json())
            .then(dataJson => {
                setDataSlides(dataJson);
                setLoadingSlides(false);
            })
            
    }, []);


    const [toggleState, setToggleState] = useState(1);

    function toggleTab(e) {
        setToggleState(e.target.tabIndex);
    }

    return (
        <div className={classes.tabs__conteiner}>
            <div className={classes.tabs__header}>
                
                {isLoadingTabs &&  <Skeleton height={35} />}
                <ul className={classes.tabs__buttons}>
                    
                    
                    {dataTabs.map((item, index) => (
                        <Button key={index}
                            tabIndex={item.id}
                            currentTab={toggleState}
                            nameBtn={item.name}
                            onClick={() => toggleTab} />
                    ))}
                </ul>
            </div>
            <div className={classes.tabs__body}>
                {isLoadingSlides && <CardSkeleton cards={4} /> }
                {dataTabs.map((item, index) => (
                    <Slider key={index}
                        tabIndex={item.id}
                        currentTab={toggleState}
                        onClick={() => toggleTab}
                        dataCard={dataSlides} />
                ))}
            </div>
        </div>
    );
}

export default Tabs;