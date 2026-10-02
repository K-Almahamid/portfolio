/**
 * Project detail page bootstrap (standalone URLs under /projects/{slug}/)
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
    const navLinks = document.querySelectorAll('.nav-menu > li > a');
    const langToggle = document.getElementById('langToggle');
    const themeToggle = document.getElementById('themeToggle');
    const themeIconSun = document.getElementById('themeIconSun');
    const themeIconMoon = document.getElementById('themeIconMoon');
    const themeCurrent = document.getElementById('themeCurrent');
    const langCurrent = document.getElementById('langCurrent');
    const projectPageBody = document.getElementById('projectPageBody');
    const shotLightbox = document.getElementById('shotLightbox');
    const shotLightboxImg = document.getElementById('shotLightboxImg');
    const shotLightboxCaption = document.getElementById('shotLightboxCaption');

    window.currentLang = currentLang;

    function getSlugFromPage() {
        if (window.PROJECT_PAGE && window.PROJECT_PAGE.slug) {
            return window.PROJECT_PAGE.slug;
        }
        const match = window.location.pathname.match(/\/projects\/([^/]+)\/?$/);
        return match ? match[1] : null;
    }

    function getTranslation(key) {
        return ProjectDetail.getTranslation(key, currentLang);
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
        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            const key = el.getAttribute('data-i18n-aria');
            const value = getTranslation(key);
            if (value && value !== key) el.setAttribute('aria-label', value);
        });
    }

    function updateDocumentMeta(projectId) {
        const name = getTranslation('projects.' + projectId + '.name');
        const descKey = 'projects.' + projectId + '.desc';
        const bodyKey = 'projects.' + projectId + '.body';
        let desc = getTranslation(descKey);
        if (!desc || desc === descKey) {
            desc = getTranslation(bodyKey);
        }
        if (desc && desc.length > 160) {
            desc = desc.slice(0, 157) + '…';
        }
        const title = name + ' | Khaled Almahamid';
        document.title = title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && desc && desc !== bodyKey) metaDesc.setAttribute('content', desc);
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title);
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc && desc) ogDesc.setAttribute('content', desc);
        const twTitle = document.querySelector('meta[name="twitter:title"]');
        if (twTitle) twTitle.setAttribute('content', title);
        const twDesc = document.querySelector('meta[name="twitter:description"]');
        if (twDesc && desc) twDesc.setAttribute('content', desc);
    }

    function renderPage(projectId, routeMeta) {
        ProjectDetail.renderProjectDetail(projectPageBody, projectId, routeMeta, currentLang);
        ProjectDetail.applyProjectShotCaptions(projectPageBody, currentLang);
        updateDocumentMeta(projectId);
    }

    function setLanguage(lang) {
        currentLang = lang;
        window.currentLang = lang;
        localStorage.setItem(STORAGE_LANG, lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.body.classList.toggle('rtl', lang === 'ar');
        document.body.classList.toggle('lang-ar', lang === 'ar');
        if (langCurrent) langCurrent.textContent = lang === 'en' ? 'EN' : 'AR';
        const slug = getSlugFromPage();
        const routeMeta = slug ? window.projectRoutes.bySlug[slug] : null;
        if (routeMeta) renderPage(routeMeta.id, routeMeta);
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
            themeCurrent.textContent =
                currentTheme === 'light' ? getTranslation('themeLight') : getTranslation('themeDark');
        }
        if (themeToggle) {
            themeToggle.setAttribute(
                'aria-label',
                currentTheme === 'light' ? getTranslation('themeToggleToDark') : getTranslation('themeToggleToLight')
            );
        }
    }

    function handleNavbarScroll() {
        if (!navbar) return;
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    }

    function toggleMobileMenu() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        const open = navMenu.classList.contains('active');
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.style.overflow = open ? 'hidden' : '';
    }

    function closeMobileMenu() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function scrollToSection(href) {
        if (!href || !href.startsWith('#') || href.length <= 1) return;
        const target = document.querySelector(href);
        if (!target) return;
        const behavior = prefersReducedMotion() ? 'auto' : 'smooth';
        target.scrollIntoView({ behavior, block: 'start' });
    }

    function handleInPageNavClick(e) {
        const href = this.getAttribute('href');
        if (!href) return;
        if (href.includes('#')) {
            const hash = href.substring(href.indexOf('#'));
            if (hash.length > 1 && href.indexOf('index.html') !== -1) {
                return;
            }
        }
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            scrollToSection(href);
            closeMobileMenu();
        }
    }

    function handleStoreLinkClick(e) {
        const a = e.target.closest('.btn-store');
        if (!a) return;
        const href = a.getAttribute('href');
        if (href === '#' || href === '') e.preventDefault();
    }

    function openShotLightbox(src, caption) {
        if (!shotLightbox || !shotLightboxImg) return;
        shotLightboxImg.src = src;
        shotLightboxImg.alt = caption || '';
        if (shotLightboxCaption) {
            shotLightboxCaption.textContent = caption || '';
            shotLightboxCaption.hidden = !caption;
        }
        shotLightbox.hidden = false;
        shotLightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('shot-lightbox-open');
        const closeBtn = shotLightbox.querySelector('[data-close-lightbox]');
        if (closeBtn) closeBtn.focus();
    }

    function closeShotLightbox() {
        if (!shotLightbox || shotLightbox.hidden) return;
        shotLightbox.hidden = true;
        shotLightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('shot-lightbox-open');
        if (shotLightboxImg) {
            shotLightboxImg.removeAttribute('src');
            shotLightboxImg.alt = '';
        }
    }

    function initShotLightbox() {
        if (projectPageBody) {
            projectPageBody.addEventListener('click', (e) => {
                const zoomBtn = e.target.closest('.project-shot__zoom');
                if (!zoomBtn) return;
                const img = zoomBtn.querySelector('.project-shot__img');
                if (!img || !img.src) return;
                e.preventDefault();
                openShotLightbox(img.src, img.alt);
            });
        }
        if (shotLightbox) {
            shotLightbox.addEventListener('click', (e) => {
                if (
                    e.target.closest('[data-close-lightbox]') ||
                    e.target.classList.contains('shot-lightbox__backdrop')
                ) {
                    closeShotLightbox();
                }
            });
        }
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && shotLightbox && !shotLightbox.hidden) {
                closeShotLightbox();
            }
        });
    }

    function init() {
        const slug = getSlugFromPage();
        const routeMeta = slug ? window.projectRoutes.bySlug[slug] : null;
        if (!routeMeta) {
            window.location.replace(resolveSitePath('index.html#projects'));
            return;
        }

        setTheme(currentTheme);
        setLanguage(currentLang);

        window.addEventListener('scroll', handleNavbarScroll);
        handleNavbarScroll();

        if (navToggle) {
            navToggle.addEventListener('click', toggleMobileMenu);
        }
        navLinks.forEach((link) => link.addEventListener('click', closeMobileMenu));

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

        document.addEventListener('click', handleStoreLinkClick, true);
        initShotLightbox();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
