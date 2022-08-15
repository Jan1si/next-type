import SimpleBar from 'simplebar-react'; // Импорт модуля для кастомного скролла 
import 'simplebar/dist/simplebar.min.css'; // Импорт стилей для кастомного скролла
import "./Card.css"; // Импорт стилей для карточек
import Tag from './Tag'; // Импорт компонента "Тэг"

function Card(props) {
    // Данные для карточек приходят из props переданных из слайдера
    return (
        // Рендере карточки 
        <div className="card">
            {/* Инициализация модуля SimpleBar ("Кастомный скролл для карточек") */}
            <SimpleBar autoHide={false} style={
                {
                    maxHeight: 470,
                    maxWidth: 320,
                    width: 320,
                }
            }
            >
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
        </div>
    );

}

export default Card;