const navbar = document.querySelector('.navbar');
const h = document.querySelector('.navbar h1');
window.onscroll = function() {
    const currPageScroll = window.scrollY;
    if(currPageScroll > 120) {
        navbar.style.height = '80px';
        h.style.fontSize = '1.6rem';
    } else {
        navbar.style.height = '232px';
        h.style.fontSize = '2.2rem';
    }
}