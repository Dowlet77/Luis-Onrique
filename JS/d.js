new Swiper('.swiper',{
    speed:850,
    parallax:true,
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
        dynamicBullets:true,
    },
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
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