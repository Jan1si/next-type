import classes from "./Button.module.css";

function Button(props) {
    return (
        <a href="#/" className={classes.tabs__item}>{props.nameBtn}</a>
    );
}

export default Button;

