const dropdownButton = document.querySelector('.dropdown-container');
const arrow = document.querySelector('.arrow');
const dropdown = document.querySelector('.dropdown');

dropdownButton.addEventListener('click', function() {
    if(dropdown.classList.contains('dropdown-active')) {
        arrow.classList.remove("fa-caret-up");
        arrow.classList.add("fa-caret-down");
        dropdown.classList.remove('dropdown-active');
    } else {
        arrow.classList.remove("fa-caret-down");
        arrow.classList.add("fa-caret-up");
        dropdown.classList.add('dropdown-active');
    }
   
});