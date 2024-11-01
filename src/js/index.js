const gallery = document.getElementsByClassName('gallery')[0];
const prev = document.getElementById('gallery-prev');
const next = document.getElementById('gallery-next');
const cards = gallery.children;

let timer;
let x = 0;

function start() {
    updateGallery(Math.round((cards.length - 2) / 2))

    prev.addEventListener('click', () => {
        if (x > 0) {
            updateGallery(x - 1);
        }
    });

    next.addEventListener('click', () => {
        if (x < cards.length - 3) {
            updateGallery(x + 1);
        }
    });
}

function updateGallery(y) {
    cards[x].classList.remove('active');
    cards[y].classList.add('active');
    gallery.scrollTo({
        left: cards[y].offsetLeft,
        behavior: 'smooth'
    });
    x = y
}

start();