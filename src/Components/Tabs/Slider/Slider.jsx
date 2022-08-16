import classes from "./Slider.module.css"; // Импорт css модуля слайдера
import arrow from "./img/arrow.svg"; // Импорт svg стрелок
import Card from "./Card/Card"; // Импорт карточек
import {useRef} from "react";


function Slider(props) {

    const slidesTrack = useRef(null);

    let offset = 0;

    function prevHandler() {
        if (offset === 0) {
            offset = 0
        } else {
        offset -= 335;
        }
        slidesTrack.current.style = `transform: translateX(${offset}px);`;
    }

    function nextHandler() {
        if (offset === ((slidesTrack.current.childNodes.length - 4) * 335) || ((slidesTrack.current.childNodes.length - 4) * 335) <= 0) {
            offset = 0
        } else {
            offset += 335;
        }
        slidesTrack.current.style = `transform: translateX(-${offset}px);`;
        
    }

    // Рендер слайдера
    return (
        <div 
            tabIndex={props.tabIndex}
            className={
                `${classes.slider__container}
                 ${props.tabIndex === props.currentTab ? classes.slider__container_active : " "}`}
        >
            <div ref={slidesTrack} className={classes.sliders__cards}>
                {props.dataCard.map((item, index) => (
                   props.tabIndex === item.categoryId ? <Card key={index} image={item.image} desc={item.description} tags={item.tags}/> : null
                ))}
                
            </div>

            {/* Рендер стрелок слайдера */}
            <div className={classes.next__slide} onClick={nextHandler}>
                <img src={arrow} alt="" />
            </div>

            {/* Рендер стрелок слайдера */}
            <div className={classes.prev__slide} onClick={prevHandler}>
                <img src={arrow} alt="" />
            </div>
        </div>
    );
}

export default Slider;