const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dotsDiv = document.querySelector('.dots');
const dots = document.querySelectorAll('.dot')

const totalSlides = slides.length;
let currentSlide = 0;

init();

prev.addEventListener('click', function(event) {
    addAndShow(-1, totalSlides);
});

next.addEventListener('click', function(event) {
    addAndShow(1, totalSlides);
});

dotsDiv.addEventListener('click', function(event) {
    if(event.target.classList.contains('dot')) {
        const slideToShow = Array.prototype.indexOf.call(dots, event.target);
        currentSlide = slideToShow;
        show(slideToShow);
    }
});

function addAndShow(addCount, totalCount) {
    currentSlide = ( slides.length + currentSlide + addCount) % totalCount;
    show(currentSlide);
}
function show(currentSlide) {
    for(let i = 0; i < slides.length; i++) {
        if(i === currentSlide) {
            slides[i].style.display = 'block';
            dots[i].classList.add('dot-active');
        } else {
            slides[i].style.display = 'none';
            dots[i].classList.remove('dot-active');
        }
    }
}

function init(intitialImage = 0) {
    slides[intitialImage].style.display = 'block';
    dots[intitialImage].classList.add('dot-active');
}