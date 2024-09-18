const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idm = 0;

function carrossel() {
  idm++;

  if (idm > img.length - 1) {
    idm = 0;
  }

  imgs.style.transform = `tranlateX(${-idm * 500} px)`;
}

setInterval(carrossel, 1800);

// script.js
const slides = document.querySelectorAll("#img img");
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

let currentSlide = 0;

function showSlide() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
});

prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
});

// Adicione um timer para automatizar o carrossel
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}, 5000); // alterne as imagens a cada 5 segundos

showSlide(); // Exibe o primeiro slide ao carregar a página
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
