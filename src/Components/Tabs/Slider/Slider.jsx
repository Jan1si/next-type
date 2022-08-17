import classes from "./ActiveSlide.module.css"; // Импорт css модуля слайдера
import arrow from "./img/arrow.svg"; // Импорт svg стрелок
import Card from "./Card/Card"; // Импорт карточек
import { useRef } from "react";


function Slider(props) {

    const slidesTrack = useRef(null);
    let offset = 0;
    let showCard = 4;
    let x1 = null;
    let y1 = null;

    function touchStart(event) {
        const firstTouch = event.touches[0]
        x1 = firstTouch.clientX;
        y1 = firstTouch.clientY;
    }

    function touchMove(event) {
        if (!x1) {
            return false;
        }
        let x2 = event.changedTouches[0].clientX;
        let y2 = event.changedTouches[0].clientY;
        let xDiff = x2 - x1;
        let yDiff = y2 - y1;

        if (Math.abs(xDiff) > Math.abs(yDiff)){
            xDiff > 0 ? prevHandler() : nextHandler();
        } 
        
        x1 = null;
        y1 = null;
    }


    function prevHandler() {
        const track = slidesTrack.current;
        const widthCard = +window.getComputedStyle(track.childNodes[0]).width.slice(0, (window.getComputedStyle(track.childNodes[0]).width.length - 2));
        let widthTrack = +window.getComputedStyle(track).width.slice(0, (window.getComputedStyle(track).width.length - 2));

        window.onresize = () => {
            offset = 0;
            track.style = `transform: translateX(${offset}px);`;
            widthTrack = +window.getComputedStyle(track).width.slice(0, (window.getComputedStyle(track).width.length - 2));
            if (widthTrack > 900) {
                showCard = 4;
            } else if (widthTrack <= 900 && widthTrack > 600) {
                showCard = 3;
            } else if (widthTrack <= 600 && widthTrack > 340) {
                showCard = 2;
            } else if (widthTrack <= 340) {
                showCard = 1;
            }
        }

        if (widthTrack > 900) {
            showCard = 4;
        } else if (widthTrack <= 900 && widthTrack > 600) {
            showCard = 3;
        } else if (widthTrack <= 600 && widthTrack > 340) {
            showCard = 2;
        } else if (widthTrack <= 340) {
            showCard = 1;
        }

        if (offset === 0) {
            offset = 0
        } else {
            offset -= (widthCard + 15);
        }

        track.style = `transform: translateX(${offset}px);`;
    }

    function nextHandler() {
        const track = slidesTrack.current;
        const widthCard = +window.getComputedStyle(track.childNodes[0]).width.slice(0, (window.getComputedStyle(track.childNodes[0]).width.length - 2));
        let widthTrack = +window.getComputedStyle(track).width.slice(0, (window.getComputedStyle(track).width.length - 2));

        window.onresize = () => {
            offset = 0;
            track.style = `transform: translateX(${offset}px);`;
            widthTrack = +window.getComputedStyle(track).width.slice(0, (window.getComputedStyle(track).width.length - 2));
            if (widthTrack > 900) {
                showCard = 4;
            } else if (widthTrack <= 900 && widthTrack > 600) {
                showCard = 3;
            } else if (widthTrack <= 600 && widthTrack > 340) {
                showCard = 2;
            } else if (widthTrack <= 340) {
                showCard = 1;
            }
        }

        if (widthTrack > 900) {
            showCard = 4;
        } else if (widthTrack <= 900 && widthTrack > 600) {
            showCard = 3;
        } else if (widthTrack <= 600 && widthTrack > 340) {
            showCard = 2;
        } else if (widthTrack <= 340) {
            showCard = 1;
        }

        if (offset === ((widthCard + 15) * (track.childNodes.length - showCard)) || ((track.childNodes.length - showCard) * (widthCard + 15)) <= 0) {
            offset = 0;
        } else {
            offset += (widthCard + 15);
        }

        track.style = `transform: translateX(-${offset}px);`;

    }

    // Рендер слайдера
    return (

        <div
            tabIndex={props.tabIndex}
            className={
                `slider__container
                 ${props.tabIndex === props.currentTab ? classes.slider__container_active : " "}`}
        >
            <div ref={slidesTrack} onTouchStart={touchStart} onTouchEnd={touchMove} className="sliders__cards">
                {props.dataCard.map((item, index) => (
                    props.tabIndex === item.categoryId ? <Card key={index} image={item.image} desc={item.description} tags={item.tags} /> : null
                ))}

            </div>

            {/* Рендер стрелок слайдера */}
            <div className="next__slide" onClick={nextHandler}>
                <img src={arrow} alt="" />
            </div>

            {/* Рендер стрелок слайдера */}
            <div className="prev__slide" onClick={prevHandler}>
                <img src={arrow} alt="" />
            </div>
        </div>
    );
}

export default Slider;