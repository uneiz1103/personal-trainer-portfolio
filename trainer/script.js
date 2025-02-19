// let currentSlide = 0;
// const slides = document.querySelectorAll(".slide");

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.style.display = i === index ? "block" : "none";
//     });
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }

// function startSlider() {
//     showSlide(currentSlide);
//     setInterval(nextSlide, 3000);
// }

// document.addEventListener("DOMContentLoaded", startSlider);


let currentSlide = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function updateSlider() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

/* Auto-play slider every 3 seconds */
setInterval(nextSlide, 3000);
