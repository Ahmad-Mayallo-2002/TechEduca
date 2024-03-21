import { contact } from "./global.js";

contact();

const icons = document.querySelectorAll(".follow .icons");
const mode = document.getElementById("mode");

mode.addEventListener("click", function() {
    icons.forEach(icon => {
        icon.classList.toggle("btn-outline-dark");
        icon.classList.toggle("btn-outline-light");
    })
})