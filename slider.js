document.addEventListener('DOMContentLoaded', function () {
    const slideContainer = document.querySelector('.pkgDetailsSlideImage');
    const slides = document.querySelectorAll('.pkgDetailsSlideImage img');
    const prevArrow = document.querySelector('.pkgDetailsArrow img:first-child');
    const nextArrow = document.querySelector('.pkgDetailsArrow img:last-child');
    const slideCount = slides.length;
    let currentIndex = 0;
    let slideInterval;

    // Function to show slide at a given index
    function showSlide(index) {
        // Ensure index is within bounds
        if (index >= slideCount) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slideCount - 1;
        } else {
            currentIndex = index;
        }

        // Calculate the transform value to show the current slide
        const offset = -currentIndex * 100;
        slideContainer.style.transform = `translateX(${offset}%)`;
    }

    // Function to go to the next slide
    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    // Function to go to the previous slide
    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Start auto sliding
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }

    // Stop auto sliding
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Event listeners for arrows
    nextArrow.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevArrow.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    // Initialize slider
    showSlide(currentIndex);
    startAutoSlide();
});
