// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        mobileMenuBtn.classList.toggle('active');
    });
}

// Intersection Observer for Reveal Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .feature-card, .pillar').forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
});

// Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const formMessage = document.getElementById('formMessage');
            
            // Show loading state
            submitButton.disabled = true;
            submitButton.classList.add('loading');
            formMessage.textContent = '';
            formMessage.className = 'form-message';

            try {
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();
                
                if (data.success) {
                    formMessage.textContent = data.message;
                    formMessage.classList.add('success');
                    contactForm.reset();
                } else {
                    formMessage.textContent = data.message;
                    formMessage.classList.add('error');
                }
            } catch (error) {
                console.error('Error:', error);
                formMessage.textContent = 'An error occurred. Please try again.';
                formMessage.classList.add('error');
            } finally {
                // Reset button state
                submitButton.disabled = false;
                submitButton.classList.remove('loading');
            }
        });
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
                mobileMenuBtn.classList.remove('active');
            }
        }
    });
});

// Navbar Background Change on Scroll
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }

    // Hide/show navbar on scroll
    if (window.scrollY > lastScrollY) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

// Case Studies Carousel
const carousel = document.querySelector('.carousel');
if (carousel) {
    // College-focused case studies data
    const caseStudies = [
        {
            title: 'Campus Style Revolution',
            description: 'Transformed campus fashion with sustainable, premium collegiate apparel that students love',
            image: 'assets/images/case-study-1.jpg'
        },
        {
            title: 'Student Community Building',
            description: 'Created vibrant student communities through exclusive events and networking opportunities',
            image: 'assets/images/case-study-2.jpg'
        },
        {
            title: 'Alumni Network Success',
            description: 'Connected students with alumni mentors, leading to 85% career advancement success rate',
            image: 'assets/images/case-study-3.jpg'
        }
    ];

    // Create carousel slides
    caseStudies.forEach(study => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide reveal';
        slide.innerHTML = `
            <div class="case-study-card">
                <h3>${study.title}</h3>
                <p>${study.description}</p>
            </div>
        `;
        carousel.appendChild(slide);
    });

    // Simple auto-scroll functionality
    let currentSlide = 0;
    const slides = carousel.querySelectorAll('.carousel-slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
            slide.style.transform = i === index ? 'translateX(0)' : 'translateX(100px)';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initialize first slide
    showSlide(0);

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
} 