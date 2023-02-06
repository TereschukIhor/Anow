const decors = document.querySelectorAll('.decor-works')
for (let i = 0; i < decors.length; i++) {
    if (decors[i].offsetWidth < 280) {
        decors[i].style.justifyContent = 'center';
    }
}

const headerBtn = document.querySelector('.button__header');
headerBtn.onclick = menuShow;
function menuShow() {
    document.querySelector('.menu-nav').classList.toggle('_menu-show');
    headerBtn.classList.toggle('_btn-change');
    document.querySelector('body').classList.toggle('lock');
}

const menuLinks = document.querySelectorAll('.menu-link');
for(let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = menuLinkClose;
}
function menuLinkClose() {
    if(document.querySelector('.menu-nav').classList.contains('_menu-show')) {
        document.querySelector('.menu-nav').classList.toggle('_menu-show');
        headerBtn.classList.toggle('_btn-change');
        document.querySelector('body').classList.toggle('lock');
    }
}

const menuLogo = document.querySelector('.header-logo__logo');
menuLogo.onclick = menuLogoClose;
function menuLogoClose() {
    if(document.querySelector('.menu-nav').classList.contains('_menu-show')) {
        document.querySelector('.menu-nav').classList.toggle('_menu-show');
        headerBtn.classList.toggle('_btn-change');
        document.querySelector('body').classList.toggle('lock');
    }
}