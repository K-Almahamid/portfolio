/**
 * Khaled Almahamid - Portfolio
 * Vanilla JavaScript for navigation, i18n, theme, and interactions
 */

(function () {
    'use strict';

    const STORAGE_THEME = 'portfolio-theme';
    const STORAGE_LANG = 'portfolio-lang';
    const DEFAULT_THEME = 'dark';
    const DEFAULT_LANG = 'en';

    let currentLang = localStorage.getItem(STORAGE_LANG) || DEFAULT_LANG;
    let currentTheme = localStorage.getItem(STORAGE_THEME) || DEFAULT_THEME;

    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const contactForm = document.getElementById('contactForm');
    const themeToggle = document.getElementById('themeToggle');
    const langEN = document.getElementById('langEN');
    const langAR = document.getElementById('langAR');

    function getTranslation(key) {
        const keys = key.split('.');
        let value = translations[currentLang];
        for (const k of keys) {
            value = value?.[k];
        }
        return value ?? key;
    }

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            const value = getTranslation(key);
            if (value) el.textContent = value;
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            const value = getTranslation(key);
            if (value) el.placeholder = value;
        });
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem(STORAGE_LANG, lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.body.classList.toggle('rtl', lang === 'ar');
        langEN?.classList.toggle('active', lang === 'en');
        langAR?.classList.toggle('active', lang === 'ar');
        applyTranslations();
    }

    function setTheme(theme) {
        currentTheme = theme;
        localStorage.setItem(STORAGE_THEME, theme);
        document.body.classList.toggle('theme-light', theme === 'light');
    }

    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    function toggleMobileMenu() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    function closeMobileMenu() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }

    function handleNavClick(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            closeMobileMenu();
        }
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const mailtoLink = `mailto:k.w.almahamid@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}\n\n---\nFrom: ${encodeURIComponent(email)}`;
        window.location.href = mailtoLink;
        contactForm.reset();
    }

    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll(
            '.skill-card, .project-card, .experience-card, .education-card, .languages-card, .tool-item'
        );
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index % 3 * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        animatedElements.forEach((el) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });
    }

    function init() {
        setTheme(currentTheme);
        setLanguage(currentLang);

        window.addEventListener('scroll', handleNavbarScroll);
        handleNavbarScroll();

        if (navToggle) navToggle.addEventListener('click', toggleMobileMenu);
        navLinks.forEach((link) => link.addEventListener('click', handleNavClick));
        if (contactForm) contactForm.addEventListener('submit', handleFormSubmit);

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const next = currentTheme === 'dark' ? 'light' : 'dark';
                setTheme(next);
            });
        }
        if (langEN) langEN.addEventListener('click', () => setLanguage('en'));
        if (langAR) langAR.addEventListener('click', () => setLanguage('ar'));

        if ('IntersectionObserver' in window) initScrollAnimations();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
