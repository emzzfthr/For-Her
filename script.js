const pages = document.querySelectorAll(".page");
let current = 0;

document.querySelector(".book").addEventListener("click", () => {
  pages[current].classList.remove("active");
  current = (current + 1) % pages.length;
  pages[current].classList.add("active");
});
