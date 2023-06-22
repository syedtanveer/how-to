const button = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown-content');

window.addEventListener('click', function(event) {
    if(event.target.id === "dropdown-btn") {
        dropdown.classList.add('active');
    } else {
        dropdown.classList.remove('active');
    }
});