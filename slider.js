$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 10, //Отступ от картино если выводите больше 1
        nav: true, //Подключим навигацию
        autoplay: true, //Автозапуск слайдера
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 6000, //Время смены слайда
        responsive: { //Адаптация в зависимости от разрешения экрана
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            660: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});