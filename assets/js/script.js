let aboutBtn = document.querySelector("#linkAbout")
let servicesBtn = document.querySelector("#linkServices")
let contactBtn = document.querySelector("#linkContact")
let headerBtn = document.querySelector(".header__btn")
let aboutSection = document.querySelector(".about")
let servicesSection = document.querySelector(".services")
let contactSection = document.querySelector(".contact")
let headerMenu = document.querySelector(".header__menu")
let headerList = document.querySelector(".header__list")

aboutBtn.addEventListener('click', function (event) {
    event.preventDefault();
    aboutSection.scrollIntoView({
        behavior: 'smooth'
    });
});

headerBtn.addEventListener('click', function (event) {
    event.preventDefault();
    aboutSection.scrollIntoView({
        behavior: 'smooth'
    });
});

servicesBtn.addEventListener('click', function (event) {
    event.preventDefault();
    servicesSection.scrollIntoView({
        behavior: 'smooth'
    });
});

contactBtn.addEventListener('click', function (event) {
    event.preventDefault();
    contactSection.scrollIntoView({
        behavior: 'smooth'
    });
});

SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 800,
    // Размер шага в пикселях 
    stepSize: 75,

    // Дополнительные настройки:

    // Ускорение 
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 3,
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,
    touchpadSupport: true,
})

headerMenu.addEventListener('click', (evt) => {
    headerList.classList.toggle('visible')
})

headerList.addEventListener('click', (evt) => {
    headerList.classList.toggle('visible')
})
