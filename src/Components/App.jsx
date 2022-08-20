import Header from "./Header/Header"; // Импорт компонента "шапка"
import Tabs from "./Tabs/Tabs"; // Импорт компонента "Табы"


function App() {

    // Рендер приложения
    return(
        <div className="wrapper__app">
            <Header /> {/* Рендер компонента "Header" */}
            <div className="body__app">
                <Tabs /> {/* Рендер компонента "Tabs" */}
            </div>
        </div>
    );

}

// Экспорт приложения
export default App;