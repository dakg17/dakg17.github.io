function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-icon");
    if (hamburger) {
        hamburger.addEventListener("click", toggleMenu);
    }
});