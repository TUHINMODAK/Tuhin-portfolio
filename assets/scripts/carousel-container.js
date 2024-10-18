let isPaused = false;
let intervalId = null;

function startCarousel() {
  intervalId = setInterval(() => {
    document.querySelector(".carousel").style.transform += "translateX(-1px)";
  }, 30);
}

function stopCarousel() {
  clearInterval(intervalId);
}

document
  .querySelector(".carousel-container")
  .addEventListener("mouseenter", stopCarousel);
document
  .querySelector(".carousel-container")
  .addEventListener("mouseleave", startCarousel);

startCarousel(); // Start carousel automatically

function moveLeft() {
  document.querySelector(".carousel").style.animation = "none";
  document.querySelector(".carousel").style.transform = "translateX(-20px)"; // Adjust the pixel to suit movement
}

function moveRight() {
  document.querySelector(".carousel").style.animation = "none";
  document.querySelector(".carousel").style.transform = "translateX(20px)"; // Adjust the pixel to suit movement
}

function goToProduct(productId) {
  alert("Navigating to product " + productId);
  // Here you can navigate to the product page or show details
}
