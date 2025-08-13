const slides = [
    {
        "image": "./assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// class id
const bannerImage = document.querySelector('.banner-img'); // img
const bannerTagline = document.querySelector('#banner p'); // txt
const dots = document.querySelectorAll('.dot');

let currentIndex = 0; 

function updateSlide() {
    bannerImage.src = slides[currentIndex].image;
    bannerTagline.innerHTML = slides[currentIndex].tagLine;
	dots.forEach(dot => dot.classList.remove('dot_selected'));
	dots[currentIndex].classList.add('dot_selected')
}

// fleche gauche
const arrowLeft = document.querySelector('.arrow_left');
arrowLeft.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
});

// fleche droite
const arrowRight = document.querySelector('.arrow_right');
arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
});

// Affiche la première slide au chargement
updateSlide();