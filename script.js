document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav-menu');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
});
