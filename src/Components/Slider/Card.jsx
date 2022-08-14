import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import "./Card.css";
import Tag from './Tag';

function Card(props) {
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
                <img src={props.image} alt="" className="card__image" />
                <div className="card__text">
                    <p className="card__desc">
                        {props.desc}
                    </p>
                    <ul className="card__tags">
                        {props.tags.map((item) => (
                            <Tag  tag={item.name} />
                        ))}
                    </ul>
                </div>
            </SimpleBar>
            <div className="shadow__card"></div>
        </div>
    );

}

export default Card;