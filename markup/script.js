const asideMenu = document.querySelector('.aside-menu');
const toggler = document.querySelector('.aside-menu-btn__checkbox');
let needWatch = true;

const initAsideMenu = () => {
    const width = document.body.clientWidth;
    if (width < 1200) {
        asideMenu.classList.add('aside-menu--hidden');
        toggler.checked = false;
    }    

    toggleMenuHandler();
    resizeHandler();
}

const toggleMenuHandler = () => {
    toggler.addEventListener('change', () => {
        needWatch = false;

        if (!toggler.checked) {
            asideMenu.classList.add('aside-menu--hidden');
        } else {
            asideMenu.classList.remove('aside-menu--hidden');
        }
    });
};

const resizeHandler = () => {
    // let isWidthLess = document.body.clientWidth < 1200 ? true : false;

    window.addEventListener('resize', () => {
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