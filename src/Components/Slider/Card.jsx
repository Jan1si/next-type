import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import "./Card.css";

function Card() {

    return (
        <div className="card">
            <SimpleBar autoHide={false} style={
                {
                    maxHeight: 470,
                    maxWidth: 320,
                    width: 320,
                }
            }
            >
                <img src={require("./img/card.jpg")} alt="" className="card__image" />
                <div className="card__text">
                    <p className="card__desc">
                        В нашем блоге на сайте nextype.ru вышла новая статья, в которой мы собрали ссылки на самые полезные статьи и материалы, необходимые при запуске нового сайта. Рассказываем обо всем по порядку: от выбора хостинга перед созданием сайта до выбора стратегии продвижения после запуска.
                    </p>
                    <ul className="card__tags">
                        <a href="#/" className="tag">#некстайп</a>
                        <a href="#/" className="tag">#веб_студия</a>
                        <a href="#/" className="tag">#новыйсайт</a>
                        <a href="#/" className="tag">#запусксайта</a>
                    </ul>
                </div>
            </SimpleBar>
            <div className="shadow__card"></div>
        </div>
    );

}

export default Card;