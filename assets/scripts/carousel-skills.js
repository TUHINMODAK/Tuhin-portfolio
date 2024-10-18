const carouselskillcards = document.querySelector('.carousel-cards');
const skillcards = document.querySelectorAll('.carousel-skills .carousel-cards .card');

let index = 0;
const totalskillcards = skillcards.length;

function changeImage() {
    index++;
    if (index === totalskillcards) {
        index = 0; // Reset index to 0 for infinite loop
    }
    // Translate the carousel to the next image
    carouselskillcards.style.transform = `translateX(${-index * 700}px)`;
}

// Change image every 3 seconds
setInterval(changeImage, 3000);
