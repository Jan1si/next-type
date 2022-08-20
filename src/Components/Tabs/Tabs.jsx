import Slider from "./Slider/Slider"; // Импорт компонента "Слайдер"
import Tab from "./Tab"; // Импорт компонента "кнопка табы"
import React, { useState, useEffect } from "react"; // Импорт хуков
import Skeleton from 'react-loading-skeleton'; // Импорт модуля для создания прелоадера компонентов
import 'react-loading-skeleton/dist/skeleton.css'; // Импорт стилей для  прелоадера компонентов
import CardSkeleton from "./Slider/Card/CardSkeleton"; // Импорт скелета карточки
import MobilSlider from "./Slider/MobilSlider";

function Tabs() {

    // Получение даных с API для табов
    const baseUrlTabs = "https://my-json-server.typicode.com/glebov-g/frontend-fake-db/categories"; // URL к api 
    const [dataTabs, setDataTabs] = useState([]); // useState для занесения данных табов в массив
    const [isLoadingTabs, setLoadingTabs] = useState(true); // useState для установки состояния загрузки табов

    useEffect(() => { // Вызов хука "useEffect" для получения данных из API
        fetch(baseUrlTabs)
            .then(responce => responce.json())
            .then(tabs => {
                setDataTabs(tabs); // Занесения полученных табов в массив "dataTabs"
                setLoadingTabs(false); // Отключение прилоадера табов
            })
    }, []);


    // Получение данных для карточек в слайдере с API 
    const baseUrlSlider = "https://my-json-server.typicode.com/glebov-g/frontend-fake-db/items"; // URL к api 
    const [dataSlides, setDataSlides] = useState([]); // useState для занесения данных карточек слайдера в массив
    const [isLoadingSlides, setLoadingSlides] = useState(true); // useState для установки состояния загрузки карточек

    useEffect(() => { // Вызов хука "useEffect" для получения данных из API
        fetch(baseUrlSlider)
            .then(respoce => respoce.json())
            .then(slides => {
                setDataSlides(slides); // Занесения полученных карточек в массив "dataSlides"
                setLoadingSlides(false); // Отключение прилоадера карточек
            })
    }, []);


    const [toggleState, setToggleState] = useState(1); // useState для установки состояния активного таба

    function toggleTab(e) { // Функция для переключения табов
        setToggleState(e.target.tabIndex);
    }

    return (

        <div className="tabs__conteiner">

            <div className="tabs__header">
                {isLoadingTabs && <Skeleton height={35} />} {/* Вызов прелоадера" */}
                <ul className="tabs__buttons">
                    {dataTabs.map((item, index) => ( // Рендер "Табов"
                        <Tab
                            key={index} // Передача в таб уникального ключа
                            tabIndex={item.id} // Передача в таб индекса таба
                            currentTab={toggleState} // Передача в таб текущего активного таба
                            nameBtn={item.name} // Передача в таб пропса с именем кнопки
                            onClick={() => toggleTab} /> // Передача в таб пропса с функциией переключения таба
                    ))}
                </ul>
            </div>

            <div className="tabs__body">
                {isLoadingSlides && <CardSkeleton cards={4} />} {/* Вызов прелоадера и передача в него количество создаваемых скелетов карточек */}
                
                {dataTabs.map((item, index) => ( // Рендер "Слайдера"
                    <Slider
                        key={index} // Передача в слайдер уникального ключа
                        tabIndex={item.id} // Передача в слайдер индекса  таба
                        currentTab={toggleState} // Передача в слайдер текущего активного таба
                        dataCard={dataSlides} // Передача в слайдер данных для карточек
                        /> 
                ))}
                
                {dataTabs.map((item, index) => ( // Рендер "Слайдера для мобильных устойств"
                    <MobilSlider
                        key={index} // Передача в слайдер уникального ключа
                        tabIndex={item.id} // Передача в слайдер индекса  таба
                        currentTab={toggleState} // Передача в слайдер текущего активного таба
                        dataCard={dataSlides} // Передача в слайдер данных для карточек
                        /> 
                ))}
                
            </div>

        </div>
    );
}

export default Tabs;