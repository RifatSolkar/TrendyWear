
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 4000);
