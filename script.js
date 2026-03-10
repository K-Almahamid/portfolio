/**
 * Khaled Almahamid - Portfolio
 * Vanilla JavaScript for navigation, smooth scroll, and interactions
 */

(function () {
    'use strict';

    // DOM Elements
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const contactForm = document.getElementById('contactForm');

    /**
     * Navbar scroll effect - add shadow when scrolled
     */
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    /**
     * Mobile menu toggle
     */
    function toggleMobileMenu() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    /**
     * Close mobile menu when clicking a link
     */
    function closeMobileMenu() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }

    /**
     * Smooth scroll for anchor links
     */
    function handleNavClick(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            closeMobileMenu();
        }
    }

    /**
     * Contact form submission handler
     */
    function handleFormSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create mailto link (fallback - form doesn't have backend)
        const mailtoLink = `mailto:k.w.almahamid@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}\n\n---\nFrom: ${encodeURIComponent(email)}`;
        window.location.href = mailtoLink;

        // Reset form
        contactForm.reset();
    }

    /**
     * Intersection Observer for scroll-triggered animations
     */
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll(
            '.skill-card, .project-card, .experience-card, .tool-item'
        );

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index % 3 * 100); // Stagger effect
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach((el) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });
    }

    /**
     * Initialize event listeners
     */
    function init() {
        // Navbar scroll
        window.addEventListener('scroll', handleNavbarScroll);
        handleNavbarScroll(); // Initial check

        // Mobile menu toggle
        if (navToggle) {
            navToggle.addEventListener('click', toggleMobileMenu);
        }

        // Nav links - smooth scroll and close menu
        navLinks.forEach((link) => {
            link.addEventListener('click', handleNavClick);
        });

        // Contact form
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
        }

        // Scroll animations
        if ('IntersectionObserver' in window) {
            initScrollAnimations();
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
