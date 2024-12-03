const carousel = document.getElementById("carousel");

const slides = Array.from(carousel.children);
slides.forEach((slide) => {
  const clone = slide.cloneNode(true);
  carousel.appendChild(clone);
});
