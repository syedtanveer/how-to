const accordions = document.querySelectorAll(".accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function (e) {
    if (e.target.className === "accordion-button") {
      this.classList.toggle("active");
      const correspondingBody = this.querySelector(".accordion-body");
      if (correspondingBody.style.maxHeight) {
        correspondingBody.style.maxHeight = null;
      } else {
        correspondingBody.style.maxHeight =
          correspondingBody.scrollHeight + "px";
      }
    }
  });
}
