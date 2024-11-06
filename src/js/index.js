const gallery = document.getElementsByClassName('gallery')[0];
const prev = document.getElementById('gallery-prev');
const next = document.getElementById('gallery-next');
const cards = gallery.children;

let timer;
let x = 0;

function start() {
    updateGallery(0)

    prev.addEventListener('click', () => {
        if (x > 0) {
            updateGallery(x - 1, false);
        }
    });

    next.addEventListener('click', () => {
        if (x < cards.length - 1) {
            updateGallery(x + 1, true);
        }
    });
}

function updateGallery(y, forwards) {
    cards[x].classList.remove('active');
    cards[y].classList.add('active');
    gallery.scrollTo({
        left: cards[y].offsetLeft,
        behavior: 'smooth'
    });
    x = y
}

start();