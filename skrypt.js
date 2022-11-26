const menuButton = document.querySelector(".menu-button");
const menuCloseButton = document.querySelector(".menu-close-button");
const menu = document.querySelector(".all-menu");

console.log(menuButton);
console.log(menu);

function toggleMenu() {
    menu.classList.toggle("menu-open");
    menuCloseButton.classList.toggle("button-open");
}
menuButton.addEventListener("click", toggleMenu);
menuCloseButton.addEventListener("click", toggleMenu);