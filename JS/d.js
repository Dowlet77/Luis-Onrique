new Swiper('.swiper', {
    speed: 850,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

const iconMenu = document.querySelector('.menu__burger');
if (iconMenu) {
    const menuBody = document.querySelector('.burger-menu__body');
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock')
        menuBody.classList.toggle('_active')
        iconMenu.classList.toggle('_active')
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY >= 600) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});