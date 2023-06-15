const tabButtons = document.querySelector(".tabs");
const tabxButtons = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.addEventListener("click", function eventCallback(e) {
  const tabName = e.target.name;
  Array.from(tabxButtons).forEach((btn) =>
    tabName === btn.name
      ? btn.classList.add("active")
      : btn.classList.remove("active")
  );
  if (tabName) {
    for (let i = 0; i < tabPanels.length; i++) {
      if (tabPanels[i].id === tabName) {
        tabPanels[i].classList.add("active");
      } else {
        tabPanels[i].classList.remove("active");
      }
    }
  }
});
