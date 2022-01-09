//headerのhamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//要素を配列で取得
const targetElement = document.querySelectorAll(".animationTarget");
// console.log(targetElement);
document.addEventListener("scroll", function () {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance =
      targetElement[i].getBoundingClientRect().top +
      targetElement[i].clientHeight * 0.6;
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
});
