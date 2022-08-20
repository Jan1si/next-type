function Tab(props) {
    return (
        <a
            href="#/"
            tabIndex={props.tabIndex} // Присваивание индекса в таб при нажатии индекс отправляется в фукциию toggleTab компонента "Tabs"
            onClick={props.onClick()} // Назначение функции при нажатии 
            className={`tabs__item ${props.currentTab === props.tabIndex ? "tabs_active" : " "} `}> {/* Проверка текущего таба */} 
            {props.nameBtn}
        </a>
    );
}

export default Tab;

