function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Select DOM elements
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const description = document.querySelector('#service-description');

// Add descriptions for each service
const serviceDescriptions = [
    "Service 1: This is the description for Service 1. It includes high-quality features and professional support.",
    "Service 2: This is the description for Service 2. We provide tailored solutions to meet your needs.",
    "Service 3: This is the description for Service 3. Expect excellence and top-notch results.",
];

let currentIndex = 0; // Track the current slide

// Function to update the carousel position and description
function updateCarousel() {
    const width = items[0].getBoundingClientRect().width; // Get item width
    track.style.transform = `translateX(-${currentIndex * width}px)`; // Move track
    description.textContent = serviceDescriptions[currentIndex]; // Update description
}

// Move to the previous slide
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

// Move to the next slide
function nextSlide() {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        updateCarousel();
    }
}

// Initialize carousel with the first service
updateCarousel();
