const search = document.querySelector('#search');
const listitems = document.querySelectorAll(".search-list > li");

search.addEventListener('input', function(e) {
    const inputVal = e.target.value.toLowerCase();
    for(let i = 0; i < listitems.length; i++) {
        if(listitems[i].innerText.toLowerCase().indexOf(inputVal) >= 0 ) {
            listitems[i].style.display = 'block';
        } else {
            listitems[i].style.display = 'none';
        }
    }
});