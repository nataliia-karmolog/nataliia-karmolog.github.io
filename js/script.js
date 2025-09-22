//hamburger
const hamburger = document.querySelector('.hamburger');
const adaptiveMenu = document.querySelector('.adaptive-menu');
const navList = document.querySelector('.nav-ul');

function toggleMenu() {
    adaptiveMenu.classList.toggle('is-open');
}

hamburger.addEventListener('click', toggleMenu);

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        adaptiveMenu.classList.remove('is-open');
    }
}

navList.addEventListener('click', closeMenu);

// Custom slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const customSlider = document.querySelector('.custom-slider');
    if (!customSlider) {
        console.log('Custom slider not found');
        return; // Exit if custom slider doesn't exist
    }
    
    const slidesContainer = document.querySelector('.custom-slides');
    const slides = document.querySelectorAll('.custom-slide');
    const nextBtn = document.querySelector('.custom-next');
    const prevBtn = document.querySelector('.custom-prev');
    
    console.log('Slider elements found:', {
        slidesContainer: !!slidesContainer,
        slides: slides.length,
        nextBtn: !!nextBtn,
        prevBtn: !!prevBtn
    });
    
    if (!slidesContainer || !slides.length) {
        console.log('Missing required slider elements');
        return; // Exit if elements don't exist
    }
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function showSlide(index) {
        if (slidesContainer) {
            const translateX = -index * 100;
            slidesContainer.style.transform = `translateX(${translateX}%)`;
            console.log(`Showing slide ${index}, translateX: ${translateX}%`);
        }
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        console.log('Next slide:', currentSlide);
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        console.log('Previous slide:', currentSlide);
        showSlide(currentSlide);
    }
    
    // Add event listeners for buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            nextSlide();
        });
        console.log('Next button event listener added');
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            prevSlide();
        });
        console.log('Previous button event listener added');
    }
    
    // Initialize slider
    showSlide(0);
    console.log('Slider initialized');
    
    // Optional: Add touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    slidesContainer.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });
    
    slidesContainer.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const threshold = 50; // Minimum distance for swipe
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide(); // Swipe left - next slide
            } else {
                prevSlide(); // Swipe right - previous slide
            }
        }
    }
});