import classes from "./Slider.module.css"; // Импорт css модуля слайдера
import arrow from "./img/arrow.svg"; // Импорт svg стрелок
import Card from "./Card/Card"; // Импорт карточек

function Slider(props) {

    // Рендер слайдера
    return (
        <div
            tabIndex={props.tabIndex}
            className={
                `${classes.slider__container}
                 ${props.tabIndex === props.currentTab ? classes.slider__container_active : " "}`}
        >
            <div className={classes.sliders__cards}>
                
                {props.dataCard.map((item, index) => (
                   props.tabIndex === item.categoryId ? <Card key={index} image={item.image} desc={item.description} tags={item.tags}/> : null
                ))}
                
            </div>

            {/* Рендер стрелок слайдера */}
            <div className={classes.next__slide}>
                <img src={arrow} alt="" />
            </div>

            {/* Рендер стрелок слайдера */}
            <div className={classes.prev__slide}>
                <img src={arrow} alt="" />
            </div>
        </div>
    );
}

export default Slider;