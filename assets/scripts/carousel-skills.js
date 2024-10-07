const carouselImages = document.querySelector('.carousel-cards');
const images = document.querySelectorAll('.carousel-skills .carousel-cards img');

let index = 0;
const totalImages = images.length;

function changeImage() {
    index++;
    if (index === totalImages) {
        index = 0; // Reset index to 0 for infinite loop
    }
    // Translate the carousel to the next image
    carouselImages.style.transform = `translateX(${-index * 500}px)`;
}

// Change image every 3 seconds
setInterval(changeImage, 3000);
