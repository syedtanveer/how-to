const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const display = document.querySelector('.display');
const displayPicture = document.querySelectorAll('.displayPicture')

const totalSlides = slides.length;
let currentSlide = 0;

init();

prev.addEventListener('click', function(event) {
    addAndShow(-1, totalSlides);
});

next.addEventListener('click', function(event) {
    addAndShow(1, totalSlides);
});

display.addEventListener('click', function(event) {
    if(event.target.parentNode.classList.contains('displayPicture')) {
        const slideToShow = Array.prototype.indexOf.call(displayPicture, event.target.parentNode);
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
            displayPicture[i].classList.add('displayPicture-active');
        } else {
            slides[i].style.display = 'none';
            displayPicture[i].classList.remove('displayPicture-active');
        }
    }
}

function init(intitialImage = 0) {
    slides[intitialImage].style.display = 'block';
    displayPicture[intitialImage].classList.add('displayPicture-active');
}