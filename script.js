const burgerMenu = document.querySelector(".burger-menu");
const headerList = document.querySelector('.header-list');

burgerMenu.addEventListener('click', function(){
    headerList.classList.toggle('active');
})