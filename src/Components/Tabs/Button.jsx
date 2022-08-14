import classes from "./Button.module.css";

function Button(props) {
    return (
        <a
            href="#/"
            tabIndex={props.tabIndex}
            onClick={props.onClick()}
            className={`${classes.tabs__item} ${props.currentTab === props.tabIndex ? classes.tabs_active : " "} `}>
            {props.nameBtn}
        </a>
    );
}

export default Button;

