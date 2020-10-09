import 'normalize.css';
import './css/main.scss';
import Swiper, { Pagination } from "swiper";
import 'swiper/swiper-bundle.css';

const  isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if(isMobile.any()) {
    Swiper.use([Pagination]);
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        }
    });
}