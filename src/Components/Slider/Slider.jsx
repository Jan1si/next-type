import classes from "./Slider.module.css";
import arrow from "./img/arrow.svg";
import Card from "./Card";

function Slider() {
    return (
        <div className={classes.slider__container}>
            <div className={classes.sliders__cards}>
                <Card />
                <Card />
                <Card />
                <Card />
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