import SimpleBar from 'simplebar-react'; // Импорт модуля для кастомного скролла 
import 'simplebar/dist/simplebar.min.css'; // Импорт стилей для кастомного скролла
import Tag from './Tag'; // Импорт компонента "Тэг"

function Card(props) {
    // Данные для карточек приходят из props переданных из слайдера
    return (
        // Рендере карточки 
        <a href={props.url} className={`mobile__card ${props.currentSlide === (props.cardIndex + 1) || (props.cardIndex + 1) === 6 ? "mobile__card_active" : " "} `}>
            {/* Инициализация модуля SimpleBar ("Кастомный скролл для карточек") */}
            <SimpleBar autoHide={false} >
                <img src={props.image} alt="" className="card__image" />
                <div className="card__text">
                    <p className="card__desc">
                        {props.desc}
                    </p>
                    <ul className="card__tags">
                        {/* Рендер Тэгов для карточки */}
                        {props.tags.map((item, index) => (
                            <Tag key={index} tag={item.name} />
                        ))}
                    </ul>
                </div>
            </SimpleBar>

            {/* Рендер белой тени в низу карточки */}
            <div className="shadow__card"></div>
        </a>
    );

}

export default Card;