document.addEventListener('DOMContentLoaded', function (){
    const NAV = document.querySelector('.header');
    const MENU_BTN = NAV.querySelector('.menu-button');
    const LINK = NAV.querySelectorAll('.main-menu_item-link');

    MENU_BTN.addEventListener('click', function(){
        NAV.classList.toggle('header_active');
        document.body.classList.toggle('no-scroll');
    });
    NAV.querySelectorAll('.main-menu_item-link').forEach(item=> {
        item.addEventListener('click', function () {
            NAV.classList.remove('header_active');
            document.body.classList.remove('no-scroll');
        })
    })
});