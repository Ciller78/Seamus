let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(
    ".carousel-image",
    "carousel-image beach"
  );
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === currentIndex) {
      slide.classList.add("active");
    }
  });
}

function changeSlide(direction) {
  currentIndex += direction;
  showSlide(currentIndex);
}

// Automatically show the first slide
showSlide(currentIndex);
