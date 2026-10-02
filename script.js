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
        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            const key = el.getAttribute('data-i18n-aria');
            const value = getTranslation(key);
            if (value && value !== key) el.setAttribute('aria-label', value);
        });
    }

    const projectOverlay = document.getElementById('projectOverlay');
    const projectOverlayBody = document.getElementById('projectOverlayBody');
    const shotLightbox = document.getElementById('shotLightbox');
    const shotLightboxImg = document.getElementById('shotLightboxImg');
    const shotLightboxCaption = document.getElementById('shotLightboxCaption');
    let projectOverlayLastFocus = null;
    let shotLightboxLastFocus = null;

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

    function parseShotCaption(text) {
        if (!text) return { title: '', desc: '' };
        const parts = text.split(' — ');
        if (parts.length >= 3) {
            return {
                title: parts.slice(0, 2).join(' — '),
                desc: parts.slice(2).join(' — ')
            };
        }
        if (parts.length === 2) {
            return { title: parts[0], desc: parts[1] };
        }
        return { title: '', desc: text };
    }

    function createProjectShotFigure(shot, variant) {
        const captionText = getTranslation(shot.captionKey);
        const parsed = parseShotCaption(captionText);

        const fig = document.createElement('figure');
        fig.className = 'project-shot project-shot--' + variant;
        fig.setAttribute('data-shot-caption-key', shot.captionKey);

        const row = document.createElement('div');
        row.className = 'project-shot__row';

        const media = document.createElement('div');
        media.className = 'project-shot__media';

        const zoomBtn = document.createElement('button');
        zoomBtn.type = 'button';
        zoomBtn.className = 'project-shot__zoom';
        zoomBtn.setAttribute('data-i18n-aria', 'projects.previewScreenshot');
        zoomBtn.setAttribute(
            'aria-label',
            getTranslation('projects.previewScreenshot') || 'View full-size screenshot'
        );

        const img = document.createElement('img');
        img.className = 'project-shot__img';
        img.src = shot.src;
        img.alt = parsed.title || captionText;
        img.loading = 'lazy';
        img.decoding = 'async';

        zoomBtn.appendChild(img);
        media.appendChild(zoomBtn);

        const cap = document.createElement('figcaption');
        cap.className = 'project-shot__caption';

        if (parsed.title) {
            const title = document.createElement('span');
            title.className = 'project-shot__caption-title';
            title.textContent = parsed.title;
            cap.appendChild(title);
        }

        const desc = document.createElement('p');
        desc.className = 'project-shot__caption-desc';
        desc.textContent = parsed.desc || captionText;
        cap.appendChild(desc);

        row.appendChild(media);
        row.appendChild(cap);
        fig.appendChild(row);
        return fig;
    }

    function createProjectScreenshotSection(sectionId, titleKey, shots, variant) {
        if (!shots || !shots.length) return null;

        const section = document.createElement('section');
        section.className = 'project-overlay__shots';
        section.setAttribute('aria-labelledby', sectionId);

        const heading = document.createElement('h3');
        heading.id = sectionId;
        heading.className = 'project-overlay__shots-title mono';
        heading.setAttribute('data-i18n', titleKey);
        heading.textContent = getTranslation(titleKey);

        const grid = document.createElement('div');
        grid.className = 'project-overlay__shots-grid project-overlay__shots-grid--' + variant;

        shots.forEach((shot) => {
            grid.appendChild(createProjectShotFigure(shot, variant));
        });

        section.appendChild(heading);
        section.appendChild(grid);
        return section;
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

    function appendProjectScreenshots(frag, projectId, card) {
        const manifest =
            typeof window.projectScreenshotManifest !== 'undefined'
                ? window.projectScreenshotManifest[projectId]
                : null;
        if (!manifest) {
            frag.appendChild(createProjectScreenshotPlaceholders());
            return;
        }

        const webTitleKey =
            (card && card.getAttribute('data-web-shots-title')) || 'projects.screenshotsWeb';

        const webSection = createProjectScreenshotSection(
            'projectOverlayShotsWeb',
            webTitleKey,
            manifest.web,
            'web'
        );
        if (webSection) frag.appendChild(webSection);

        const mobileSection = createProjectScreenshotSection(
            'projectOverlayShotsMobile',
            'projects.screenshotsMobile',
            manifest.mobile,
            'mobile'
        );
        if (mobileSection) frag.appendChild(mobileSection);
    }

    function openProjectDetail(card) {
        if (!projectOverlay || !projectOverlayBody || !card) return;
        projectOverlayLastFocus = document.activeElement;
        projectOverlayBody.replaceChildren();

        const titleEl = card.querySelector('.project-name');
        const subtitleEl = card.querySelector('.project-subtitle');
        const descEl = card.querySelector('.project-description');
        const detailsEl = card.querySelector('.project-details');
        const actionsEl = card.querySelector('.project-card-actions');
        const projectId = card.getAttribute('data-project');
        if (!titleEl || !detailsEl) return;

        const title = titleEl.cloneNode(true);
        title.removeAttribute('id');
        title.classList.add('project-overlay__title');
        title.id = 'projectOverlayTitle';

        const frag = document.createDocumentFragment();
        frag.appendChild(title);

        if (subtitleEl) {
            const subtitle = subtitleEl.cloneNode(true);
            subtitle.classList.remove('visually-hidden');
            subtitle.classList.add('project-overlay__subtitle');
            frag.appendChild(subtitle);
        }

        const bodyEl = detailsEl.querySelector('.project-body');
        if (bodyEl) {
            const body = bodyEl.cloneNode(true);
            body.classList.add('project-overlay__body');
            frag.appendChild(body);
        } else if (descEl) {
            const desc = descEl.cloneNode(true);
            desc.classList.add('project-overlay__desc');
            frag.appendChild(desc);
        }

        if (actionsEl && !card.classList.contains('project-card--no-stores')) {
            const actions = actionsEl.cloneNode(true);
            const detailBtn = actions.querySelector('.project-open-detail');
            if (detailBtn) detailBtn.remove();
            actions.classList.add('project-overlay__stores');
            frag.appendChild(actions);
        }

        const details = detailsEl.cloneNode(true);
        const bodyDuplicate = details.querySelector('.project-body');
        if (bodyDuplicate) bodyDuplicate.remove();
        details.classList.remove('project-details--collapsed');
        frag.appendChild(details);

        appendProjectScreenshots(frag, projectId, card);

        projectOverlayBody.appendChild(frag);

        applyTranslations();
        applyProjectTechTags();
        applyProjectShotCaptions(projectOverlayBody);

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
        closeShotLightbox();
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
            if (e.key !== 'Escape') return;
            if (shotLightbox && !shotLightbox.hidden) {
                closeShotLightbox();
                return;
            }
            if (projectOverlay && !projectOverlay.hidden) {
                closeProjectDetail();
            }
        });

        document.addEventListener('click', handleStoreLinkClick, true);
    }

    function openShotLightbox(src, caption) {
        if (!shotLightbox || !shotLightboxImg) return;
        shotLightboxLastFocus = document.activeElement;
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
        if (closeBtn && typeof closeBtn.focus === 'function') closeBtn.focus();
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
        if (shotLightboxLastFocus && typeof shotLightboxLastFocus.focus === 'function') {
            shotLightboxLastFocus.focus();
        }
        shotLightboxLastFocus = null;
    }

    function initShotLightbox() {
        if (projectOverlayBody) {
            projectOverlayBody.addEventListener('click', (e) => {
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
    }

    function applyProjectShotCaptions(root) {
        if (!root) return;
        root.querySelectorAll('.project-shot[data-shot-caption-key]').forEach((fig) => {
            const key = fig.getAttribute('data-shot-caption-key');
            const full = getTranslation(key);
            if (!full || full === key) return;
            const parsed = parseShotCaption(full);
            const titleEl = fig.querySelector('.project-shot__caption-title');
            const descEl = fig.querySelector('.project-shot__caption-desc');
            if (titleEl && parsed.title) titleEl.textContent = parsed.title;
            if (descEl) descEl.textContent = parsed.desc || full;
        });
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
        applyProjectShotCaptions(projectOverlayBody);
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

    function scrollToSection(href) {
        if (!href || !href.startsWith('#') || href.length <= 1) return;
        const target = document.querySelector(href);
        if (!target) return;
        const behavior = prefersReducedMotion() ? 'auto' : 'smooth';
        target.scrollIntoView({ behavior, block: 'start' });
    }

    function handleInPageNavClick(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            scrollToSection(href);
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

    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll(
            '.about-content, .skill-card, .service-card, .project-card, .experience-card, .education-card, .languages-card, .tools-category-card, .contact-panel'
        );
        const sectionTitles = document.querySelectorAll('.section-title');

        if (prefersReducedMotion()) {
            animatedElements.forEach((el) => {
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
            sectionTitles.forEach((el) => el.classList.add('is-visible'));
            document.querySelectorAll('.section').forEach((section) => section.classList.add('is-visible'));
            return;
        }

        if (!('IntersectionObserver' in window)) {
            animatedElements.forEach((el) => {
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
            sectionTitles.forEach((el) => el.classList.add('is-visible'));
            return;
        }

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.section').forEach((section) => sectionObserver.observe(section));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index % 3 * 80);
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
        navLinks.forEach((link) => link.addEventListener('click', handleInPageNavClick));

        const servicesContactCta = document.querySelector('.services-cta');
        if (servicesContactCta) {
            servicesContactCta.addEventListener('click', handleInPageNavClick);
        }

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
        initShotLightbox();

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

        if ('IntersectionObserver' in window || prefersReducedMotion()) initScrollAnimations();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
