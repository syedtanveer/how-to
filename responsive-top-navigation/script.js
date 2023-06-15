const topNav = document.querySelector('.top-nav');
const icon = document.querySelector('.icon');

icon.addEventListener('click', function() {
    topNav.classList.toggle('responsive');
});