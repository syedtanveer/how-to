const navbar = document.querySelector('.navbar');

// find initial pageYOffset
let prevPageScroll = window.scrollY;
window.onscroll = function onScroll() {
    const currPageScroll = window.scrollY;
    // prevPageScroll will be greater than currPageScroll only if we are scrolling up
    if( prevPageScroll > currPageScroll ) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-45px';
    }
    prevPageScroll = currPageScroll;
}