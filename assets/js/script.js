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

// https://discord.com/api/webhooks/1316114334983786558/JYMhsSNB2dM5PLuNH1qK-sVFjeTOnn3sHe3z9SQ29TscJT3ZWFuuLqOX7EHqgvDpQGEI

document.querySelector(".contact__form").addEventListener("submit", async (e) => {
    e.preventDefault()

    const webhookURL = "https://discord.com/api/webhooks/1316114334983786558/JYMhsSNB2dM5PLuNH1qK-sVFjeTOnn3sHe3z9SQ29TscJT3ZWFuuLqOX7EHqgvDpQGEI";
    const name = document.getElementById("inputName").value;
    const email = document.getElementById("inputEmail").value;
    const message = document.getElementById("inputMessage").value;

    const payload = {
        content: `**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
    };

    try {
        const response = await fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            location.reload()
        } else {
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
