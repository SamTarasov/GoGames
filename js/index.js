const btnForOpenMenuMobile = document.getElementById('btnOpenMenuMobile');
const btnForCloseMenuMobile = document.getElementById('btnCloseMenuMobile');
const OpenMenuMobile = document.getElementById('nav_menu_mobile');
const nav = document.getElementById('nav');

btnForOpenMenuMobile.addEventListener('click', () => {
    OpenMenuMobile.style.display = 'flex';
    btnForOpenMenuMobile.style.display = 'none';
    btnForCloseMenuMobile.style.display = 'block';
})

btnForCloseMenuMobile.addEventListener('click', () => {
    OpenMenuMobile.style.display = 'none';
    btnForOpenMenuMobile.style.display = 'block';
    btnForCloseMenuMobile.style.display = 'none';
})