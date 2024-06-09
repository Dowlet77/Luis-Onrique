new Swiper('.swiper',{
    pagination:{
        el:'.swiper-pagination',
        
        clickable:true,
    },
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