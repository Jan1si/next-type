import arrow from "./img/arrow.svg"; // Импорт svg стрелок
import Card from "./Card/Card"; // Импорт карточек
import { useRef } from "react"; // Импорт хука "useRef"
import useMoveSlide from "../../../Hooks/useMoveSlide"; // Импорт кастомного хука "useMoveSlide"

function Slider(props) {

    const refSlideList = useRef(''); // Инициализация хука "useRef", который получает поле с карточками
    const moveSlide = useMoveSlide(''); // Инициализация кастомного хука "useMoveSlide", который вешает события на поле с карточками

    // Рендер слайдера
    return (

        <div
            tabIndex={props.tabIndex} // Индекс таба
            className={
                `slider__container
                 ${props.tabIndex === props.currentTab ? "slider__container_active" : " "}`} // Отображение слайдера в зависимости от текущего таба
        >
            <div ref={refSlideList} 
                onLoad={() => moveSlide.setRef(refSlideList.current)} // Получение поля с карточками при загрузке
                className="sliders__cards">
                {props.dataCard.map((item, index) => (
                    props.tabIndex === item.categoryId ? <Card key={index} image={item.image} desc={item.description} tags={item.tags} /> : null
                ))}

            </div>

            {/* Рендер стрелок слайдера */}
            <div className="next__slide" onClick={() => {
                moveSlide.clickNextSlide()
            }} >
                <img src={arrow} alt="" />
            </div>

            {/* Рендер стрелок слайдера */}
            <div className="prev__slide" onClick={() => moveSlide.clickPrevSlide()} >
                <img src={arrow} alt="" />
            </div>

        </div>
    );
}

export default Slider;