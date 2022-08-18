import classes from "./ActiveSlide.module.css"; // Импорт css модуля слайдера
import arrow from "./img/arrow.svg"; // Импорт svg стрелок
import Card from "./Card/Card"; // Импорт карточек
import { useRef } from "react";
import useMoveSlide from "../../../Hooks/useMoveSlide";


function Slider(props) {

    const slidesTrack = useRef(null);
    const bullets = useRef(null)
    const slider = useMoveSlide(0);
    
    // Рендер слайдера
    return (

        <div
            tabIndex={props.tabIndex}
            className={
                `slider__container
                 ${props.tabIndex === props.currentTab ? classes.slider__container_active : " "}`}
        >
            <div ref={slidesTrack} onLoad={() => slider.getTrack(slidesTrack.current)}  onTouchStart={(e) => slider.touchStart(e)} onTouchEnd={(e) => slider.touchMove(e, slidesTrack)} className="sliders__cards">
                {props.dataCard.map((item, index) => (
                    props.tabIndex === item.categoryId ? <Card key={index} image={item.image} desc={item.description} tags={item.tags} /> : null
                ))}

            </div>

            {/* Рендер стрелок слайдера */}
            <div className="next__slide" onClick={() => {
                slider.nextSlide(slidesTrack);
            }
            } >
                <img src={arrow} alt="" />
            </div>

            {/* Рендер стрелок слайдера */}
            <div className="prev__slide"  onClick={() => {
                slider.getTrack(slidesTrack.current);
                slider.prevSlide(slidesTrack);
            }}>
                <img src={arrow} alt="" />
            </div>


            <div ref={bullets} className="bullets">
                {props.dataCard.map((item, index) => (
                    props.tabIndex === item.categoryId ? <span key={index} className={`bullet ${index + 1 === slider.bulletIndex ? "bullet_active" : null}`}></span> : null
                ))}
            </div>

        </div>
    );
}

export default Slider;