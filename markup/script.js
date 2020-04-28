const asideMenu = document.querySelector('.aside-menu');
const toggler = document.querySelector('.aside-menu-btn__checkbox');
let needWatch = true;

function initAsideMenu () {
    const width = document.body.clientWidth;
    if (width < 1200) {
        asideMenu.classList.add('aside-menu--hidden');
        toggler.checked = false;
    }    

    toggleMenuHandler();
    resizeWindowHandler();
}

function toggleMenuHandler () {
    toggler.addEventListener('change', function () {
        needWatch = false;

        if (!toggler.checked) {
            asideMenu.classList.add('aside-menu--hidden');
        } else {
            asideMenu.classList.remove('aside-menu--hidden');
        }
    });
};

function resizeWindowHandler () {
    window.addEventListener('resize', function () {
        if (document.body.clientWidth >= 1200 && needWatch) {
            toggler.checked = true;
            asideMenu.classList.remove('aside-menu--hidden');
        }
        
        if (document.body.clientWidth < 1200 && needWatch) {
            toggler.checked = false;
            asideMenu.classList.add('aside-menu--hidden');
        }
    });
};

initAsideMenu();