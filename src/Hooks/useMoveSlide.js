import { useState } from "react"; // Импорт хука "useState"
export default function useMoveSlide() {

    const [ref, setRef] = useState(''); // Инициализация "useState", который приниманет поле с карточками

    const cards = ref.childNodes; // Получение всех карточек
    const sliderWrapper = ref; // Получение поля с карточками
    let offset = 0; // Получение смещение поля с карточками

    function clickNextSlide(){
        // Получение ширины поля с карточками
        const widthWrapper = +getComputedStyle(sliderWrapper).width.slice(0, (getComputedStyle(sliderWrapper).width).length - 2);
        // Получение ширины карточки
        const widthCard = +getComputedStyle(cards[0]).width.slice(0, (getComputedStyle(cards[0]).width).length - 2) + 15;
        let maxOffset = ((widthCard * cards.length) - widthWrapper) -10; // Расчёт максимального смещения поля с карточками
        
        resize(sliderWrapper) // Вызов функции обнуления смещения при изменении размера окна браузера

        if (offset >= maxOffset ) {
            offset = 0;
        } else {
            offset += widthCard;
        }
        sliderWrapper.style.transform = `translateX(-${offset}px)`; // Смещение поля с карточками
    }

    
    function clickPrevSlide(){
        // Получение ширины поля с карточками
        const widthCard = +getComputedStyle(cards[0]).width.slice(0, (getComputedStyle(cards[0]).width).length - 2) + 15;

        resize(sliderWrapper) // Вызов функции обнуления смещения при изменении размера окна браузера

        if (offset === 0 ) {
            offset = 0;
        } else {
            offset -= widthCard;
        }
        sliderWrapper.style.transform = `translateX(-${offset}px)`; // Смещение поля с карточками
    }
    

    function resize(sliderWrapper) { // Функция обнуления смещения при изменении ширины окна обраузера
        window.onresize = () => {
            offset = 0;
            sliderWrapper.style.transform = `translateX(${offset}px)`; // Смещение поля с карточками
        }
    }


    // Экспорт функций
    return {
        setRef,
        clickNextSlide,
        clickPrevSlide,
    }
}