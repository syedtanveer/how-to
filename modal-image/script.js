const imageThumbnail = document.querySelector('.image-thumbnail');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalImage = document.querySelector('.modal-content-image');
const modalCaption = document.querySelector('.modal-caption');
const close = document.querySelector('.close');

imageThumbnail.addEventListener('click', function(event) {
    getImagePropertiesAndSet(event.target);
    showModal();
});

close.addEventListener('click', function(){
    hideModal();
});

function getImagePropertiesAndSet(image) {
    const src = image.src.split('.');
    const newSrc = src.slice(0, src.length-1).join('.') + '-large.' + src[src.length-1];
    modalImage.src = newSrc;
    modalCaption.textContent = image.alt
}

function showModal() {
    modal.style.display = 'block';
}

function hideModal() {
    modal.style.display = 'none';
}