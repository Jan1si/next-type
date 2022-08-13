import Slider from "../Slider/Slider";
import Button from "./Button";
import classes from "./Tabs.module.css";


function Tabs() {
    return (
        <div className={classes.tabs__conteiner}>
            <div className={classes.tabs__header}>
                <ul className={classes.tabs__buttons}>
                    <Button nameBtn="Блог"/>
                    <Button nameBtn="ВКонтакте"/>
                    <Button nameBtn="Instagram"/>
                    <Button nameBtn="YouTube"/>
                    <Button nameBtn="Facebook"/>
                </ul>
            </div>
            <div className={classes.tabs__body}>
                <Slider />
            </div>
        </div>
    );
}

export default Tabs;