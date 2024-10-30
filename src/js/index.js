function start() {
    document.addEventListener('DOMContentLoaded', function() {
        const prevButton = document.querySelector('.carousel-control-prev');
        const nextButton = document.querySelector('.carousel-control-next');
        const carouselInner = document.querySelector('.carousel-inner');
        const carouselItems = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;
    
        function updateCarousel() {
            const offset = -currentIndex * 100;
            carouselInner.style.transform = `translateX(${offset}%)`;
        }
    
        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
            updateCarousel();
        });
    
        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        });
    
        updateCarousel();
    });
}