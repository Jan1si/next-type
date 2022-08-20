import { useState } from "react"; // Импорт хука "useState"
export default function useTouchMoveSlide() {

    const [slideIndex, setSlideIndex] = useState(1); // Инициализация "useState", который приниманет индекс
    const [ref, setRef] = useState(''); // Инициализация "useState", который приниманет список карточек
    const cards = ref.childNodes; // Получение всех карточек из списка

    let xClient1 = null; 
    let yClient1 = null;

    
    function touchStart(event) { // Функция получения первого касания пользователя
        const firstTouch = event.touches[0];
        xClient1 = firstTouch.clientX;
        yClient1 = firstTouch.clientY;
    }

    function touchEnd(event) { // Функция получения второго касания и смены отображаемой карточки
        if (!xClient1) {
            return false;
        }
        let xClient2 = event.changedTouches[0].clientX;
        let yClient2 = event.changedTouches[0].clientY;

        let xDiff = xClient2 - xClient1;
        let yDiff = yClient2 - yClient1;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                if (slideIndex === 1) {
                    setSlideIndex(1);
                } else {
                    setSlideIndex(slideIndex - 1);
                }
            } else {
                if (slideIndex === cards.length) {
                    setSlideIndex(1);
                } else {
                    setSlideIndex(slideIndex + 1);
                }
            }
        }
    }


    function clickBullet(value) { // Функция смены показываемой карточки при на жатии на булит
        setSlideIndex(value);
    }


    // Экспорт функций
    return {
        touchStart,
        touchEnd,
        setRef,
        slideIndex,
        clickBullet
    }

}