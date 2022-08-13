import classes from "./Header.module.css";

function Header() {
    return (
        <div className={classes.header__app}>
            <h1 className={classes.header__title}>Блог и соцсети</h1>
            <p className={classes.header__subtitle}>Идейные соображения высшего порядка, а также сложившаяся структура организации представляет собой интересный эксперимент проверки направлений прогрессивного развития.</p>
        </div>
    );
}

export default Header;