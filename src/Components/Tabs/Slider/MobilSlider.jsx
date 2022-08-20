import useTouchMoveSlide from "../../../Hooks/useTouchMoveSlide"; // Импорт кастомного хука "useTouchMoveSlide" отвечающий за свайпы
import MobilCard from "./Card/MobilCard"; // Импорт компонента "MobilCard"
import {useRef} from "react"; // Импорт хука "useRref"
function MobilSlider(props) {

    const touchMove = useTouchMoveSlide(''); // Инициализация кастомного хука "useTouchMoveSlide"
    const cards = useRef(); // Инициализация хука "useRef", который принимает список карточек
    return (
        <div
            tabIndex={props.tabIndex} // Индекс таба
            className={
                `mobil_slider__container
                 ${props.tabIndex === props.currentTab ? "mobil_slider__container_active" : " "}`} // Отображение слайдера в зависимости от текущего таба
        >
            <div ref={cards}
                onLoad={() => touchMove.setRef(cards.current)} // Получение поля с карточками при загрузке
                onTouchStart={(e) => touchMove.touchStart(e)} // Вызов функции "touchStart" из хука "useTouchMoveSlide", котрая получет координаты первого косания
                onTouchEnd={(e) => touchMove.touchEnd(e)} // Вызов функции "touchEnd" из хука "useTouchMoveSlide", котрая получет координаты убранного косания
                className="mobil_sliders__cards">
                {props.dataCard.map((item, index) => (
                    props.tabIndex === item.categoryId ? <MobilCard key={index} currentSlide={touchMove.slideIndex} cardIndex={index} image={item.image} desc={item.description} tags={item.tags} url={item.url} /> : null
                ))}

            </div>
            
            {/* Рендер булитов */}
            <div className="bullets">
                {props.dataCard.map((item, index) => (
                    props.tabIndex === item.categoryId ? <span key={index} onClick={() => touchMove.clickBullet(index+1)} className={`bullet ${touchMove.slideIndex === (index+1) || (index+1) === 6? "bullet_active" : " "}`}></span> : null
                ))}
            </div>
        </div>
    );
}

export default MobilSlider;