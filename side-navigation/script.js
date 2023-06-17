const navIcon = document.querySelector('.nav-icon');
const asidenav = document.querySelector('.side-navigation');
const closeButton = document.querySelector('.close-btn');
const main = document.querySelector('.main');
const underlay = document.querySelector('.underlay');

navIcon.addEventListener('click', function() {
    asidenav.classList.toggle('open');
    main.classList.toggle('side-navigation-open');
    underlay.classList.toggle('open');
});

closeButton.addEventListener('click', function() {
    asidenav.classList.remove('open');
    asidenav.classList.remove('open');
    main.classList.remove('side-navigation-open');
    underlay.classList.remove('open');
});

underlay.addEventListener('click', function() {
    asidenav.classList.remove('open');
    asidenav.classList.remove('open');
    main.classList.remove('side-navigation-open');
    underlay.classList.remove('open');
});