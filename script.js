const year = document.querySelector("[data-year]");
const header = document.querySelector("[data-header]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (header) {
  const setHeaderState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });
}
