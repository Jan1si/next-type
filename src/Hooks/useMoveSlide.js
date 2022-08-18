import {useState} from "react";
function useNextSlide(offsetValue, showCardValue) {

    const [offetWidth, setOffsetWidth] = useState(offsetValue)
    let showCard = showCardValue; // Колличество карточек для показа

    function getTrack(track) {
        setOffsetWidth(-(+window.getComputedStyle(track.childNodes[0]).width.slice(0, (window.getComputedStyle(track.childNodes[0]).width.length - 2)) + 15));
    }
    console.log(offetWidth);
    // Функция переключение слайдера вперёд
    function nextSlide(track) {
        const trackSlider = track.current;
        const widthCard = +window.getComputedStyle(trackSlider.childNodes[0]).width.slice(0, (window.getComputedStyle(trackSlider.childNodes[0]).width.length - 2));
        let widthTrack = +window.getComputedStyle(trackSlider).width.slice(0, (window.getComputedStyle(trackSlider).width.length - 2));
        resizeScreen(trackSlider, widthTrack);
        if (offetWidth < -((widthCard + 15) * (trackSlider.childNodes.length - showCard))) {
            trackSlider.style = `transform: translateX(${setOffsetWidth(0), offetWidth}px);`;
        } else {
            trackSlider.style = `transform: translateX(${setOffsetWidth(offetWidth - (widthCard + 15)), offetWidth}px);`;
        }
            // trackSlider.style = `transform: translateX(${offetWidth}px);`;  
    }
    
    // Функция переключение слайдера назад
    function prevSlide(track) {
        const trackSlider = track.current;
        getTrack(trackSlider);
        const widthCard = +window.getComputedStyle(trackSlider.childNodes[0]).width.slice(0, (window.getComputedStyle(trackSlider.childNodes[0]).width.length - 2));
        let widthTrack = +window.getComputedStyle(trackSlider).width.slice(0, (window.getComputedStyle(trackSlider).width.length - 2));
        resizeScreen(trackSlider, widthTrack);
        if (offetWidth === 0) {
            trackSlider.style = `transform: translateX(0px);`;
        } else {
            setOffsetWidth(offetWidth + (widthCard + 15))
            trackSlider.style = `transform: translateX(${offetWidth}px);`;
        }
        
        
    }

    // Функция обнуления отступа при именении разрешения 
    function resizeScreen(trackSlider, widthTrack) {
        window.onresize = () => {
            getTrack(trackSlider);
            trackSlider.style = `transform: translateX(0px);`;
            widthTrack = +window.getComputedStyle(trackSlider).width.slice(0, (window.getComputedStyle(trackSlider).width.length - 2));
            if (widthTrack > 900) {
                showCard = 4;
            } else if (widthTrack <= 900 && widthTrack > 600) {
                showCard = 3;
            } else if (widthTrack <= 600 && widthTrack > 340) {
                showCard = 2;
            } else if (widthTrack <= 340) {
                showCard = 1;
            }
        }

        if (widthTrack > 900) {
            showCard = 4;
        } else if (widthTrack <= 900 && widthTrack > 600) {
            showCard = 3;
        } else if (widthTrack <= 600 && widthTrack > 340) {
            showCard = 2;
        } else if (widthTrack <= 340) {
            showCard = 1;
        }
    }

    let xClient1 = null;
    let yClient1 = null;

    // Функция определения косания пользователя 
    function touchStart(event) {
        const firstTouch = event.touches[0]
        xClient1 = firstTouch.clientX;
        yClient1 = firstTouch.clientY;
    }

    function touchMove(event, track) {
        if (!xClient1) {
            return false;
        }
        let xClient2 = event.changedTouches[0].clientX;
        let yClient2 = event.changedTouches[0].clientY;
        let xDiff = xClient2 - xClient1;
        let yDiff = yClient2 - yClient1;

        if (Math.abs(xDiff) > Math.abs(yDiff)){
            xDiff > 0 ? prevSlide(track)  : nextSlide(track) ;
        } 
        
        xClient1 = null;
        yClient1 = null;
    }
    

    return {
        nextSlide,
        prevSlide,
        touchStart,
        touchMove,
        getTrack,
    }
}

export default useNextSlide;