#!/usr/bin/env python3
"""Generate static project pages under projects/{slug}/index.html"""

import html
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PROJECTS = [
    ("brainogram", "brain", "Brainogram", "Full-stack AI trading platform for Gold & Silver markets — Flutter mobile, FastAPI backend, and real-time analysis pipeline."),
    ("bookly", "bookly", "BOOKLY — Booking & Scheduling Platform", "BOOKLY is a modern booking and scheduling platform designed to help users discover and book trusted local services with ease."),
    ("pulse", "pulse", "PULSE — Personal Finance & Rewards Platform", "PULSE is a modern personal finance and rewards platform designed to help users manage their everyday finances while making spending more rewarding."),
    ("haven", "haven", "HAVEN — Real Estate Property Platform", "HAVEN is a modern real estate platform designed to simplify property discovery, comparison, and viewing."),
    ("orbit", "orbit", "ORBIT — Enterprise ERP & Business Operations Platform", "ORBIT is a modern enterprise ERP and business operations platform designed to centralize sales, inventory, procurement, customers, finance, employees, and business analytics."),
    ("black-iris", "black", "BLACK IRIS — Digital Vouchers & Gift Cards Platform", "BLACK IRIS is a digital commerce platform designed to simplify the purchase and management of gaming credits, mobile recharge cards, gift cards, and digital vouchers."),
    ("vyro", "vyro", "VYRO — Ride-Hailing & Mobility Platform", "VYRO is a modern ride-hailing and mobility platform designed to manage on-demand transportation across passengers, drivers, and operations teams."),
    ("medora", "medora", "MEDŌRA — Integrated Healthcare Platform", "MEDŌRA is an integrated healthcare platform designed to connect patients with hospitals, clinics, medical laboratories, diagnostic imaging centers, and healthcare professionals."),
    ("nova", "nova", "NOVA — Fashion E-Commerce Store", "NOVA is a modern fashion e-commerce concept designed to deliver a seamless shopping experience across web and mobile platforms."),
    ("driveon", "driveon", "DRIVEON — Car Rental Platform", "DRIVEON is a modern car rental platform designed to deliver a seamless vehicle booking experience across web and mobile platforms."),
    ("taxik", "taxi", "TaxiK & TaxiK Driver Apps", "Ride-hailing platform with rider and driver apps — live maps, real-time tracking, and lean ~18MB builds."),
    ("expert-world", "expert", "Expert World App", "Marketing & service booking platform with real-time chat, video & voice calls."),
    ("gamecard", "game", "Gamecard App", "Merchant app for selling digital game cards with wallet management and local payment integrations."),
    ("elegant-flower", "flower", "Elegant Flower App", "Full e-commerce flower marketplace with social login and multi-gateway checkout."),
    ("nicknamelab", "nick", "NicknameLab App", "Text styling and nickname generator with Google Ads and offline SQLite storage."),
    ("masrafji", "masraf", "Masrafji App", "Personal finance app with games, rewards, vouchers, QR flows, and multi-currency tracking."),
    ("washapp", "wash", "WashApp & WashApper Apps", "On-demand laundry and delivery platform for customers, couriers, and laundry partners."),
]

NAV = """    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="../../index.html#hero" class="nav-logo" data-i18n="common.name">Khaled Almahamid</a>
            <ul class="nav-menu" id="navMenu">
                <li><a href="../../index.html#about" data-i18n="nav.about">About</a></li>
                <li><a href="../../index.html#skills" data-i18n="nav.skills">Skills</a></li>
                <li><a href="../../index.html#services" data-i18n="nav.services">Services</a></li>
                <li><a href="../../index.html#projects" data-i18n="nav.projects">Projects</a></li>
                <li><a href="../../index.html#experience" data-i18n="nav.experience">Experience</a></li>
                <li><a href="../../index.html#education" data-i18n="nav.education">Education</a></li>
                <li><a href="../../index.html#tools" data-i18n="nav.tools">Tools</a></li>
                <li><a href="../../index.html#contact" data-i18n="nav.contact">Contact</a></li>
            </ul>
            <div class="nav-trailing">
                <div class="nav-actions">
                    <button type="button" class="nav-action nav-action--lang" id="langToggle" title="EN / العربية" aria-label="Toggle language">
                        <span class="nav-action__lang mono" id="langCurrent">EN</span>
                    </button>
                    <button type="button" class="nav-action nav-action--theme" id="themeToggle" title="Toggle color theme" aria-label="Toggle theme">
                        <span class="nav-action__icon-slot" aria-hidden="true">
                            <svg class="nav-action__svg nav-action__svg--sun" id="themeIconSun" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <circle cx="12" cy="12" r="3.25" stroke="currentColor" stroke-width="1.75"/>
                                <path stroke="currentColor" stroke-width="1.75" stroke-linecap="round" d="M12 4v2.5M12 17.5V20M4 12h2.5M17.5 12H20"/>
                            </svg>
                            <svg class="nav-action__svg nav-action__svg--moon" id="themeIconMoon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                            </svg>
                        </span>
                        <span class="visually-hidden" id="themeCurrent">Dark</span>
                    </button>
                </div>
                <button type="button" class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navMenu">
                    <span class="nav-toggle-bar"></span>
                    <span class="nav-toggle-bar"></span>
                    <span class="nav-toggle-bar"></span>
                </button>
            </div>
        </div>
    </nav>"""

FOOTER = """    <footer class="footer">
        <div class="container">
            <p class="footer-copyright" data-i18n="footer.copyright">© 2026 Khaled Almahamid</p>
            <p class="footer-subtitle" data-i18n="footer.subtitle">Senior Flutter Developer — Amman, Jordan</p>
            <div class="footer-links">
                <a href="https://www.linkedin.com/in/khaled-almahamid" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/K-Almahamid" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="mailto:k.w.almahamid@gmail.com">Email</a>
                <a href="tel:+962785604150">Call</a>
                <a href="https://wa.me/962785604150" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
        </div>
    </footer>"""


def page_html(slug, project_id, title, description):
    t = html.escape(title)
    d = html.escape(description)
    doc_title = f"{title} | Khaled Almahamid"
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{html.escape(doc_title)}</title>
    <meta name="description" content="{d}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="{html.escape(doc_title)}">
    <meta property="og:description" content="{d}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{html.escape(doc_title)}">
    <meta name="twitter:description" content="{d}">
    <link rel="icon" href="../../favicon.svg" type="image/svg+xml" sizes="any">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../style.css">
    <script>window.PROJECT_PAGE={{slug:{slug!r},id:{project_id!r}}};</script>
</head>
<body class="project-page">
    <script>
        (function(){{var t=localStorage.getItem('portfolio-theme')||'dark';if(t==='light')document.body.classList.add('theme-light');}})();
    </script>
    <a href="#main" class="skip-link" data-i18n="a11y.skipToMain">Skip to main content</a>
{NAV}
    <main id="main" class="project-page-main" tabindex="-1">
        <div class="container project-page-shell">
            <a href="../../index.html#projects" class="project-page-back mono" data-i18n="projects.backToProjects">← Back to Projects</a>
            <div id="projectPageBody" class="project-page-inner project-overlay__inner"></div>
        </div>
    </main>
    <div id="shotLightbox" class="shot-lightbox" hidden aria-hidden="true">
        <div class="shot-lightbox__backdrop" data-close-lightbox tabindex="-1" aria-hidden="true"></div>
        <div class="shot-lightbox__panel" role="dialog" aria-modal="true" aria-labelledby="shotLightboxCaption">
            <header class="shot-lightbox__header">
                <button type="button" class="btn btn-secondary shot-lightbox__close" data-close-lightbox data-i18n="projects.previewClose">Close preview</button>
            </header>
            <figure class="shot-lightbox__figure">
                <img id="shotLightboxImg" class="shot-lightbox__img" src="" alt="">
                <figcaption id="shotLightboxCaption" class="shot-lightbox__caption"></figcaption>
            </figure>
        </div>
    </div>
{FOOTER}
    <script src="../../site-paths.js"></script>
    <script src="../../project-routes.js"></script>
    <script src="../../i18n.js"></script>
    <script src="../../projects-content.js"></script>
    <script src="../../projects-screenshots.js"></script>
    <script src="../../project-detail.js"></script>
    <script src="../../project-page.js"></script>
</body>
</html>
"""


def main():
    for slug, project_id, title, description in PROJECTS:
        out_dir = os.path.join(ROOT, "projects", slug)
        os.makedirs(out_dir, exist_ok=True)
        path = os.path.join(out_dir, "index.html")
        with open(path, "w", encoding="utf-8") as f:
            f.write(page_html(slug, project_id, title, description))
        print("Wrote", path)


if __name__ == "__main__":
    main()
