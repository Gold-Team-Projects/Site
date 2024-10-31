const gallery = document.getElementById('gallery');
const prev = document.getElementById('gallery-prev');
const next = document.getElementById('gallery-next');
const deg = 360 / gallery.children.length;
let x = 0;
let timer;

function start() {
    prev.addEventListener("click", function () {
        x = x + deg;
        clearTimeout(timer);
        updateGallery();
    });
    next.addEventListener("click", function () {
        x = x - deg;
        clearTimeout(timer);
        updateGallery();
    });

    document.documentElement.style.setProperty('--gallery-deg', `${deg}deg`);
    updateGallery();
}

function updateGallery() {
    gallery.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x = x - deg;
        updateGallery();
    }, 8000);
}

start();