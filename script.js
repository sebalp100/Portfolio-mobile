let menu = document.querySelector(".menu-button");
let popUp = document.querySelector(".pop");
let scrollb = document.querySelector("body");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  popUp.classList.toggle("active");
  scrollb.classList.toggle("active");
});

document.querySelectorAll(".menu-links").forEach((i) =>
  i.addEventListener("click", () => {
    menu.classList.remove("active");
    popUp.classList.remove("active");
    scrollb.classList.remove("active");
  })
);