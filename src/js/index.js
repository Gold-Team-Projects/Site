current_slide = 0;
last_slide = 0;
slides = document.getElementById("carousel").children;

function updateCarousel() {
    slides[last_slide].style.display = "none";
    slides[current_slide].style.display = "flex";
}

function start() {
    updateCarousel()

    document.getElementById("carousel-next").addEventListener("click", function() {
        last_slide = current_slide;
        current_slide = (current_slide + 1) % slides.length;
        updateCarousel();
    });
    document.getElementById("carousel-prev").addEventListener("click", function() {
        last_slide = current_slide;
        current_slide = (current_slide - 1 + slides.length) % slides.length;
        updateCarousel();
    });
}

start()