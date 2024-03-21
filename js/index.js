import { contact, courses, grid } from "./global.js";

grid();
courses();
contact();

{
const community = document.getElementById("community");
const communityData = [
    {
        image: "../images/pro1.webp",
        name: "Ema Irnik",
        job: "Python & Algorithm Expert"
    },
    {
        image: "../images/pro2.webp",
        name: "Jason",
        job: "Data Analysis Expert"
    },
    {
        image: "../images/pro3.webp",
        name: "Maalik",
        job: "Full Stack Expert"
    },
    {
        image: "../images/pro4.webp",
        name: "Jennifer",
        job: "Design Expert Expert"
    }
];
communityData.forEach(
    element => 
    community.innerHTML += 
    `
        <div class="pro text-center">
            <img src="${element.image}" alt="" />
            <h5 class="mt-3 fw-bolder">${element.name}</h5>
            <p class="mb-2 text-secondary">${element.job}</p>
            <div class="socials mt-3">
                <a href="" class="btn btn-outline-dark"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="" class="btn btn-outline-dark mx-2"><i class="fa-brands fa-instagram"></i></a>
                <a href="" class="btn btn-outline-dark"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
        </div>
    `
)
}

const numbers = document.querySelectorAll(".date .box .number");
let goal = new Date("5-16-2024").getTime();

const interval = setInterval(function() {
    let now = new Date().getTime();
    let diff = goal - now;

    let d = Math.floor(diff / 1000 / 60 / 60 / 24);
    let h = Math.floor(diff / 1000 / 60 / 60) % 24;
    let m = Math.floor(diff / 1000 / 60) % 60;
    let s = Math.floor(diff / 1000) % 60;

    let array = [d, h, m, s];

    numbers.forEach((number, index) => {
        if (array[index] < 10) {
            number.innerHTML = `0${array[index]}`;
        } else if (array[index] === 0) {
            clearInterval(interval);
        } else {
            number.innerHTML = array[index];
        }


    });
}, 1000);