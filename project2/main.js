const menuBar = document.querySelector('.menu-bar');

// showMenuBar function
function showMenuBar() {
    const menuList = document.querySelector('.nav-left');
    menuList.classList.toggle('showMenuBar');
}
menuBar.addEventListener('click', showMenuBar);

// document.querySelector('.menu-bar').addEventListener('click', () => document.querySelector('.nav-left').classList.toggle('showMenuBar'));