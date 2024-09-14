


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

$(document).ready(function(){
    $('#carouselIndicators').carousel({
        interval: 3000 // Time in milliseconds for auto sliding
    });
});

// relatedpakge-bottom scripts
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.tourPackageCardContainer-related');
    const slideInterval = 3000; // Interval time in milliseconds
    let currentIndex = 0;

    function showNextSlide() {
        const slides = document.querySelectorAll('.tourPackageCard');
        const totalSlides = slides.length;
        currentIndex = (currentIndex + 1) % totalSlides;
        const offset = -currentIndex * 100;
        sliderContainer.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextSlide, slideInterval);
});







