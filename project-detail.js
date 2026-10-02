/**
 * Shared project detail rendering (project pages)
 */
(function (global) {
    'use strict';

    function getTranslation(key, lang) {
        if (typeof translations === 'undefined') return key;
        const currentLang = lang || global.currentLang || 'en';
        const keys = key.split('.');
        let value = translations[currentLang];
        for (const k of keys) {
            value = value?.[k];
        }
        return value ?? key;
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

    function resolveAssetSrc(src) {
        if (!src) return src;
        if (/^(https?:|data:)/.test(src)) return src;
        if (typeof resolveSitePath === 'function') {
            return resolveSitePath(src);
        }
        return src;
    }

    function createProjectShotFigure(shot, variant, lang) {
        const captionText = getTranslation(shot.captionKey, lang);
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
        zoomBtn.setAttribute(
            'aria-label',
            getTranslation('projects.previewScreenshot', lang) || 'View full-size screenshot'
        );

        const img = document.createElement('img');
        img.className = 'project-shot__img';
        img.src = resolveAssetSrc(shot.src);
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

    function createProjectScreenshotSection(sectionId, titleKey, shots, variant, lang) {
        if (!shots || !shots.length) return null;

        const section = document.createElement('section');
        section.className = 'project-overlay__shots project-page__shots';
        section.setAttribute('aria-labelledby', sectionId);

        const heading = document.createElement('h2');
        heading.id = sectionId;
        heading.className = 'project-overlay__shots-title mono section-title section-title--compact';
        heading.setAttribute('data-i18n', titleKey);
        heading.textContent = getTranslation(titleKey, lang);

        const grid = document.createElement('div');
        grid.className = 'project-overlay__shots-grid project-overlay__shots-grid--' + variant;

        shots.forEach((shot) => {
            grid.appendChild(createProjectShotFigure(shot, variant, lang));
        });

        section.appendChild(heading);
        section.appendChild(grid);
        return section;
    }

    function appendTechBlock(parent, projectId, lang) {
        const techKey = 'projects.' + projectId + '.tech';
        const raw = getTranslation(techKey, lang);
        if (!raw || raw === techKey) return;

        const block = document.createElement('div');
        block.className = 'project-tech-block project-page__tech';

        const label = document.createElement('h2');
        label.className = 'project-tech-label';
        label.setAttribute('data-i18n', 'projects.tech');
        label.textContent = getTranslation('projects.tech', lang);

        const list = document.createElement('ul');
        list.className = 'project-tech-list';
        raw
            .split(/\s*•\s*/)
            .map((s) => s.trim())
            .filter(Boolean)
            .forEach((part) => {
                const li = document.createElement('li');
                li.textContent = part;
                list.appendChild(li);
            });

        block.appendChild(label);
        block.appendChild(list);
        parent.appendChild(block);
    }

    function appendHighlights(parent, projectId, lang) {
        const proj = translations?.[lang || 'en']?.projects?.[projectId];
        if (!proj) return;
        const items = [];
        for (let i = 1; i <= 8; i += 1) {
            const key = 'l' + i;
            if (proj[key]) items.push(proj[key]);
        }
        if (!items.length) return;

        const wrap = document.createElement('div');
        wrap.className = 'project-details project-page__highlights';

        const ul = document.createElement('ul');
        ul.className = 'project-highlights';
        items.forEach((text) => {
            const li = document.createElement('li');
            li.textContent = text;
            ul.appendChild(li);
        });
        wrap.appendChild(ul);
        parent.appendChild(wrap);
    }

    function appendBody(parent, projectId, lang) {
        const bodyKey = 'projects.' + projectId + '.body';
        const bodyText = getTranslation(bodyKey, lang);
        if (bodyText && bodyText !== bodyKey) {
            const body = document.createElement('div');
            body.className = 'project-overlay__body project-page__body';
            body.textContent = bodyText;
            parent.appendChild(body);
            return;
        }
        const descKey = 'projects.' + projectId + '.desc';
        const desc = getTranslation(descKey, lang);
        if (desc && desc !== descKey) {
            const p = document.createElement('p');
            p.className = 'project-overlay__desc project-page__lead';
            p.textContent = desc;
            parent.appendChild(p);
        }
    }

    function appendStoreLinks(parent, routeMeta) {
        if (!routeMeta || !routeMeta.stores) return;
        const actions = document.createElement('div');
        actions.className = 'project-overlay__stores project-page__stores';

        const wrap = document.createElement('div');
        wrap.className = 'project-card-actions__stores';

        const android = document.createElement('a');
        android.href = '#';
        android.className = 'btn btn-store btn-store--android';
        android.setAttribute('aria-disabled', 'true');
        android.innerHTML =
            '<span class="btn-store__icon" aria-hidden="true"><svg class="btn-store__svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993.0008.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9989.4486.9989.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.5758 12 7.5758s-3.5902.6681-5.1349 1.7649L4.8429 5.8377a.4161.4161 0 00-.5676-.1521.4155.4155 0 00-.1521.5676l1.9973 3.4592C2.6889 11.186.8535 12.3074.8535 13.8976 0 15.4878 1.8354 17 4.078 17h15.844c2.2426 0 4.078-1.5122 4.078-3.1024 0-1.5902-1.8354-2.7114-4.0445-4.5762"/></svg></span><span data-i18n="projects.storeAndroid">Android</span>';

        const ios = document.createElement('a');
        ios.href = '#';
        ios.className = 'btn btn-store btn-store--ios';
        ios.setAttribute('aria-disabled', 'true');
        ios.innerHTML =
            '<span class="btn-store__icon" aria-hidden="true"><svg class="btn-store__svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg></span><span data-i18n="projects.storeApp">App Store</span>';

        wrap.appendChild(android);
        wrap.appendChild(ios);
        actions.appendChild(wrap);
        parent.appendChild(actions);
    }

    function appendScreenshots(parent, projectId, routeMeta, lang) {
        const manifest =
            typeof window.projectScreenshotManifest !== 'undefined'
                ? window.projectScreenshotManifest[projectId]
                : null;
        if (!manifest) return;

        const webTitleKey = routeMeta?.webShotsTitle || 'projects.screenshotsWeb';
        const webSection = createProjectScreenshotSection(
            'projectShotsWeb',
            webTitleKey,
            manifest.web,
            'web',
            lang
        );
        if (webSection) parent.appendChild(webSection);

        const mobileSection = createProjectScreenshotSection(
            'projectShotsMobile',
            'projects.screenshotsMobile',
            manifest.mobile,
            'mobile',
            lang
        );
        if (mobileSection) parent.appendChild(mobileSection);
    }

    function renderProjectDetail(container, projectId, routeMeta, lang) {
        if (!container) return;
        container.replaceChildren();

        const nameKey = 'projects.' + projectId + '.name';
        const subtitleKey = 'projects.' + projectId + '.subtitle';
        const name = getTranslation(nameKey, lang);
        const subtitle = getTranslation(subtitleKey, lang);

        const header = document.createElement('header');
        header.className = 'project-page__header';

        if (routeMeta?.index) {
            const indexEl = document.createElement('span');
            indexEl.className = 'project-page__index mono';
            indexEl.textContent = routeMeta.index;
            header.appendChild(indexEl);
        }

        const title = document.createElement('h1');
        title.className = 'project-overlay__title project-page__title';
        title.id = 'projectPageTitle';
        title.textContent = name;
        header.appendChild(title);

        if (subtitle && subtitle !== subtitleKey) {
            const sub = document.createElement('p');
            sub.className = 'project-overlay__subtitle project-page__subtitle';
            sub.textContent = subtitle;
            header.appendChild(sub);
        }

        container.appendChild(header);

        appendBody(container, projectId, lang);
        appendTechBlock(container, projectId, lang);
        appendHighlights(container, projectId, lang);
        appendScreenshots(container, projectId, routeMeta, lang);
        appendStoreLinks(container, routeMeta);
    }

    function applyProjectShotCaptions(root, lang) {
        if (!root) return;
        root.querySelectorAll('.project-shot[data-shot-caption-key]').forEach((fig) => {
            const key = fig.getAttribute('data-shot-caption-key');
            const full = getTranslation(key, lang);
            if (!full || full === key) return;
            const parsed = parseShotCaption(full);
            const titleEl = fig.querySelector('.project-shot__caption-title');
            const descEl = fig.querySelector('.project-shot__caption-desc');
            if (titleEl && parsed.title) titleEl.textContent = parsed.title;
            if (descEl) descEl.textContent = parsed.desc || full;
        });
    }

    global.ProjectDetail = {
        renderProjectDetail,
        applyProjectShotCaptions,
        getTranslation
    };
})(typeof window !== 'undefined' ? window : this);
