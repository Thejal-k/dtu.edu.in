

let slideIndex = 0;
const slides = document.getElementsByClassName('slide');


function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}


function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide();
}
setInterval(nextSlide,3000);

showSlide();
