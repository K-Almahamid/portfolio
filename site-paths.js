/**
 * Resolve site root and asset URLs for GitHub Pages (/portfolio/) and local paths.
 */
(function (global) {
    'use strict';

    function getSiteRoot() {
        if (typeof global.PROJECT_PAGE !== 'undefined' && global.PROJECT_PAGE.siteRoot) {
            return global.PROJECT_PAGE.siteRoot;
        }
        const pathname = window.location.pathname || '/';
        const nested = pathname.match(/^(.*\/)projects\/[^/]+\/?$/);
        if (nested) {
            return nested[1] || '/';
        }
        if (pathname.includes('/portfolio/')) {
            const i = pathname.indexOf('/portfolio/');
            return pathname.slice(0, i + '/portfolio/'.length);
        }
        const lastSlash = pathname.lastIndexOf('/');
        if (lastSlash <= 0) return '/';
        return pathname.slice(0, lastSlash + 1);
    }

    function resolveSitePath(relativePath) {
        const root = getSiteRoot();
        const clean = String(relativePath || '').replace(/^\//, '');
        return root + clean;
    }

    global.getSiteRoot = getSiteRoot;
    global.resolveSitePath = resolveSitePath;
})(typeof window !== 'undefined' ? window : this);
