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

    const ARABIC_NUMERALS = '٠١٢٣٤٥٦٧٨٩';

    let currentLang = localStorage.getItem(STORAGE_LANG) || DEFAULT_LANG;
    let currentTheme = localStorage.getItem(STORAGE_THEME) || DEFAULT_THEME;

    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu > li > a');
    const contactForm = document.getElementById('contactForm');
    const themeCurrent = document.getElementById('themeCurrent');
    const langCurrent = document.getElementById('langCurrent');
    const langToggle = document.getElementById('langToggle');
    const themeToggle = document.getElementById('themeToggle');
    const themeIconSun = document.getElementById('themeIconSun');
    const themeIconMoon = document.getElementById('themeIconMoon');

    function toArabicNumerals(str) {
        return str.replace(/[0-9]/g, (d) => ARABIC_NUMERALS[parseInt(d, 10)]);
    }

    function updatePhoneDisplays() {
        document.querySelectorAll('.phone-display[data-phone]').forEach((el) => {
            const phone = el.getAttribute('data-phone');
            el.textContent = phone;
            el.setAttribute('dir', 'ltr');
        });
    }

    function getTranslation(key) {
        if (typeof translations === 'undefined') return key;
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
            if (value && value !== key) el.textContent = value;
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            const value = getTranslation(key);
            if (value) el.placeholder = value;
        });
        updatePhoneDisplays();
        applyProjectTechTags();
    }

    const projectOverlay = document.getElementById('projectOverlay');
    const projectOverlayBody = document.getElementById('projectOverlayBody');
    let projectOverlayLastFocus = null;

    function initProjectStoreLinks() {
        document.querySelectorAll('.project-card[data-android-url]').forEach((card) => {
            const androidUrl = card.getAttribute('data-android-url');
            const iosUrl = card.getAttribute('data-ios-url');
            const androidBtn = card.querySelector('[data-store="android"]');
            const iosBtn = card.querySelector('[data-store="ios"]');
            if (androidBtn && androidUrl != null) androidBtn.setAttribute('href', androidUrl);
            if (iosBtn && iosUrl != null) iosBtn.setAttribute('href', iosUrl);
        });
    }

    function handleStoreLinkClick(e) {
        const a = e.target.closest('.btn-store');
        if (!a) return;
        const href = a.getAttribute('href');
        if (href === '#' || href === '') {
            e.preventDefault();
        }
    }

    function createProjectScreenshotPlaceholders() {
        const section = document.createElement('section');
        section.className = 'project-overlay__shots';
        section.setAttribute('aria-labelledby', 'projectOverlayShotsTitle');

        const heading = document.createElement('h3');
        heading.id = 'projectOverlayShotsTitle';
        heading.className = 'project-overlay__shots-title mono';
        heading.setAttribute('data-i18n', 'projects.screenshots');
        heading.textContent = 'Screenshots';

        const grid = document.createElement('div');
        grid.className = 'project-overlay__shots-grid';

        for (let i = 0; i < 3; i += 1) {
            const fig = document.createElement('figure');
            fig.className = 'project-shot';

            const frame = document.createElement('div');
            frame.className = 'project-shot__placeholder';
            frame.setAttribute('role', 'presentation');

            const cap = document.createElement('figcaption');
            cap.className = 'project-shot__caption mono';
            cap.textContent = String(i + 1).padStart(2, '0');

            fig.appendChild(frame);
            fig.appendChild(cap);
            grid.appendChild(fig);
        }

        section.appendChild(heading);
        section.appendChild(grid);
        return section;
    }

    function openProjectDetail(card) {
        if (!projectOverlay || !projectOverlayBody || !card) return;
        projectOverlayLastFocus = document.activeElement;
        projectOverlayBody.replaceChildren();

        const titleEl = card.querySelector('.project-name');
        const descEl = card.querySelector('.project-description');
        const detailsEl = card.querySelector('.project-details');
        const actionsEl = card.querySelector('.project-card-actions');
        if (!titleEl || !detailsEl) return;

        const title = titleEl.cloneNode(true);
        title.removeAttribute('id');
        title.classList.add('project-overlay__title');
        title.id = 'projectOverlayTitle';

        const frag = document.createDocumentFragment();
        frag.appendChild(title);

        if (descEl) {
            const desc = descEl.cloneNode(true);
            desc.classList.add('project-overlay__desc');
            frag.appendChild(desc);
        }

        if (actionsEl) {
            const actions = actionsEl.cloneNode(true);
            const detailBtn = actions.querySelector('.project-open-detail');
            if (detailBtn) detailBtn.remove();
            actions.classList.add('project-overlay__stores');
            frag.appendChild(actions);
        }

        const details = detailsEl.cloneNode(true);
        details.classList.remove('project-details--collapsed');
        frag.appendChild(details);

        frag.appendChild(createProjectScreenshotPlaceholders());

        projectOverlayBody.appendChild(frag);

        applyTranslations();
        applyProjectTechTags();

        projectOverlay.hidden = false;
        projectOverlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('project-overlay-open');

        const closeBtn = projectOverlay.querySelector('.project-overlay__close');
        if (closeBtn && typeof closeBtn.focus === 'function') {
            closeBtn.focus();
        }
    }

    function closeProjectDetail() {
        if (!projectOverlay || !projectOverlayBody) return;
        projectOverlayBody.replaceChildren();
        projectOverlay.hidden = true;
        projectOverlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('project-overlay-open');
        if (projectOverlayLastFocus && typeof projectOverlayLastFocus.focus === 'function') {
            projectOverlayLastFocus.focus();
        }
        projectOverlayLastFocus = null;
    }

    function initProjectDetailOverlay() {
        document.querySelectorAll('.project-open-detail').forEach((btn) => {
            btn.addEventListener('click', () => {
                const card = btn.closest('.project-card');
                if (card) openProjectDetail(card);
            });
        });

        if (projectOverlay) {
            projectOverlay.addEventListener('click', (e) => {
                if (e.target.closest('[data-close-overlay]') || e.target.classList.contains('project-overlay__backdrop')) {
                    closeProjectDetail();
                }
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && projectOverlay && !projectOverlay.hidden) {
                closeProjectDetail();
            }
        });

        document.addEventListener('click', handleStoreLinkClick, true);
    }

    /** Split localized "A • B • C" strings into pill list items */
    function applyProjectTechTags() {
        document.querySelectorAll('[data-i18n-tech]').forEach((list) => {
            const key = list.getAttribute('data-i18n-tech');
            const raw = getTranslation(key);
            list.replaceChildren();
            if (!raw || raw === key) return;
            const parts = raw
                .split(/\s*•\s*/)
                .map((s) => s.trim())
                .filter(Boolean);
            const frag = document.createDocumentFragment();
            parts.forEach((label) => {
                const li = document.createElement('li');
                li.textContent = label;
                frag.appendChild(li);
            });
            list.appendChild(frag);
        });
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem(STORAGE_LANG, lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.body.classList.toggle('rtl', lang === 'ar');
        document.body.classList.toggle('lang-ar', lang === 'ar');
        if (langCurrent) langCurrent.textContent = lang === 'en' ? 'EN' : 'AR';
        applyTranslations();
        updateThemeIcon();
    }

    function setTheme(theme) {
        currentTheme = theme;
        localStorage.setItem(STORAGE_THEME, theme);
        document.body.classList.toggle('theme-light', theme === 'light');
        updateThemeIcon();
    }

    function updateThemeIcon() {
        if (themeIconSun && themeIconMoon) {
            themeIconSun.classList.toggle('active', currentTheme === 'dark');
            themeIconMoon.classList.toggle('active', currentTheme === 'light');
        }
        if (themeCurrent) {
            themeCurrent.textContent = currentTheme === 'light' ? getTranslation('themeLight') : getTranslation('themeDark');
        }
        if (themeToggle) {
            themeToggle.setAttribute(
                'aria-label',
                currentTheme === 'light' ? getTranslation('themeToggleToDark') : getTranslation('themeToggleToLight')
            );
        }
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
        const open = navMenu.classList.contains('active');
        if (navToggle) navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.style.overflow = open ? 'hidden' : '';
    }

    function closeMobileMenu() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    function handleNavClick(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
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
            '.about-content, .skill-card, .service-card, .project-card, .experience-card, .education-card, .languages-card, .tools-category-card, .contact-panel'
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
        if (typeof translations !== 'undefined') {
            requestAnimationFrame(applyTranslations);
        }

        window.addEventListener('scroll', handleNavbarScroll);
        handleNavbarScroll();

        if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.addEventListener('click', toggleMobileMenu);
        }
        navLinks.forEach((link) => link.addEventListener('click', handleNavClick));

        document.addEventListener('click', (e) => {
            if (!navMenu.classList.contains('active')) return;
            const t = e.target;
            if (navMenu.contains(t) || t.closest('.nav-trailing')) return;
            closeMobileMenu();
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        if (contactForm) contactForm.addEventListener('submit', handleFormSubmit);

        initProjectStoreLinks();
        initProjectDetailOverlay();

        if (langToggle) {
            langToggle.addEventListener('click', () => {
                setLanguage(currentLang === 'en' ? 'ar' : 'en');
                closeMobileMenu();
            });
        }

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                setTheme(currentTheme === 'dark' ? 'light' : 'dark');
                closeMobileMenu();
            });
        }

        updateThemeIcon();

        if ('IntersectionObserver' in window) initScrollAnimations();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
