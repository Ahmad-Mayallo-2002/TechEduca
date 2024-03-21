export function grid() {
    const grid = document.getElementById("grid");
    const featureData = [
        {
            icon: `<i class="fa-solid fa-graduation-cap"></i>`,
            head: "Scholarship Facility"
        },
        {
            icon: `<i class="fa-solid fa-certificate"></i>`,
            head: "Sell Online Course"
        },
        {
            icon: `<i class="fa-solid fa-award"></i>`,
            head: "Global Certification"
        }
    ];
    featureData.forEach(
        element => 
            grid.innerHTML += 
            `
                <article class="col text-center">
                    ${element.icon}
                    <h3>${element.head}</h3>
                    <p class="lh-lg">One make creepeth, man bearing theira firmament wan't great heaven</p>
                </article>
            `
    );
}

export function courses() {
    const courses = document.getElementById("courses");
    const coursesData = [
    {
        image: "../images/c1.jpg",
        date: "21/8/21",
        title: "JavaScript Beginners Course",
        number: 239,
        price: 419.99
    },
    {
        image: "../images/c2.jpg",
        date: "21/8/21",
        title: "HTML & CSS Beginners Course",
        number: 333,
        price: 419.99
    },
    {
        image: "../images/c3.jpg",
        date: "21/8/21",
        title: "Python Beginners Course",
        number: 555,
        price: 149.99
    },
    {
        image: "../images/c4.jpg",
        date: "21/8/21",
        title: "Data Structure Beginners Course",
        number: 777,
        price: 149.99
    },
    {
        image: "../images/c5.jpg",
        date: "21/8/21",
        title: "Algorithm Beginners Course",
        number: 111,
        price: 149.99
    },
    {
        image: "../images/c6.jpg",
        date: "21/8/21",
        title: "Angular Beginners Course",
        number: 888,
        price: 249.99
    },
    {
        image: "../images/c7.jpeg",
        date: "21/8/21",
        title: "Vue Beginners Course",
        number: 1000,
        price: 149.99
    },
    ];
    coursesData.forEach(
        element => 
        courses.innerHTML += 
        `
            <div class="card">
                <figure class="position-relative">
                    <img src="${element.image}" alt="Image" />
                    <span class="position-absolute">$${element.price}</span>
                </figure>
                <div class="card-body">
                    <small class="text-secondary">updated ${element.date}</small>
                    <h5 class="card-title fw-bold mb-3 mt-2">${element.title}</h5>
                    <div class="stars mb-3">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <span class="text-secondary">(${element.number})</span>
                    </div>
                    <a href="#" class="btn btn-outline-primary">Buy Now</a>
                </div>
            </div>
        `
    )
}

export function contact() {
    const contact = document.getElementById("contact");
    const contactLists = [
        {
            head: "Top Products",
            links: ["Message Reputation", "Power Tools", "Managed Website", "Mastering Service"]
        },
        {
            head: "Quick Links",
            links: ["Jobs", "Brand Assets", "Investor Relations", "Terms of Service"]
        },
        {
            head: "Features",
            links: ["Manage Reputation", "Power Tools", "Managed Website", "Mastering Service"]
        },
        {
            head: "Resources",
            links: ["Guides", "Research", "Experts", "Marketing Service"]
        }
    ];
    contactLists.forEach((element, index) => {
        const listItems = element.links.map(link => `<li><a href="">${link}</a></li>`).join('');
        if (index === contactLists.length - 1) {
            contact.innerHTML += `
                <div class="column">
                    <h5 class="mb-3">${element.head}</h5>
                    <ul>${listItems}</ul>
                </div>
                <div class="column">
                    <h5>News Letter</h5>
                    <p class="text-secondary">you can trust us, we only send promo offers</p>
                    <form action="" class="d-flex column-gap-1">
                        <input type="text" placeholder="Your Email Address" />
                        <button type="submit" class="text-uppercase">subscribe</button>
                    </form>
                </div>
            `;
        } else {
            contact.innerHTML += `
                <div class="column">
                    <h5 class="mb-3">${element.head}</h5>
                    <ul>${listItems}</ul>
                </div>
            `;
        }
    });
}

const mode = document.getElementById("mode");
const icon = document.querySelector("#mode i");
const nav = document.querySelector("nav");
const logo = document.getElementById("logo");
const navLink = document.querySelectorAll(".nav-link");

if (localStorage.getItem("color") === null) {
    localStorage.setItem("color", "light");
}

let localData = localStorage.getItem("color");

if (localData === "light") {
    icon.className = "fa-solid fa-moon";
    document.body.classList.remove("dark");
} else if (localData === "dark") {
    icon.className = "fa-solid fa-sun";
    document.body.classList.add("dark");
}

function modeState() {
    if (document.body.classList.contains("dark")) {
        icon.className = "fa-solid fa-sun";
        localStorage.setItem("color", "dark");
        nav.classList.add("dark-nav");
        logo.classList.add("bg-white");
        mode.classList.add("text-white");
        navLink.forEach(link => link.classList.add("text-white"));
    } else {
        icon.className = "fa-solid fa-moon";
        localStorage.setItem("color", "light");
        nav.classList.remove("dark-nav");
        logo.classList.remove("bg-white");
        mode.classList.remove("text-white");
        navLink.forEach(link => link.classList.remove("text-white"));
    }
}

mode.onclick = function() {
    document.body.classList.toggle("dark");
    modeState();
}

window.addEventListener("load", modeState());