const feedbackButton = document.querySelector('.feedback-button');
const modalContainer = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal-close-button');

feedbackButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalContainer.classList.remove('modal-container-close');
});

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalContainer.classList.add('modal-container-close');
});

modalContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('.modal-content')) {
    return
  }
  evt.preventDefault();
  modalContainer.classList.add('modal-container-close');
});

const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
const slides = document.querySelectorAll('.slider-card-item');
const paginations = document.querySelectorAll('.slider-pagination-button');

let currentSlide = 0;

sliderPrev.addEventListener('click', (evt) => {
  evt.preventDefault();
  slides[currentSlide].classList.remove('slider-card-item-active');
  paginations[currentSlide].classList.remove('button-current');
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide -= 1;
  }
  slides[currentSlide].classList.add('slider-card-item-active');
  paginations[currentSlide].classList.add('button-current');
  document.body.style.backgroundColor = slides[currentSlide].dataset.theme;
});

sliderNext.addEventListener('click', (evt) => {
  evt.preventDefault();
  slides[currentSlide].classList.remove('slider-card-item-active');
  paginations[currentSlide].classList.remove('button-current');
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }
  slides[currentSlide].classList.add('slider-card-item-active');
  document.body.style.backgroundColor = slides[currentSlide].dataset.theme;
  paginations[currentSlide].classList.add('button-current');
});

paginations.forEach((element, index) => {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    slides[currentSlide].classList.remove('slider-card-item-active');
    paginations[currentSlide].classList.remove('button-current');
    currentSlide = index;
    slides[currentSlide].classList.add('slider-card-item-active');
    document.body.style.backgroundColor = slides[currentSlide].dataset.theme;
    paginations[currentSlide].classList.add('button-current');
  });
})
