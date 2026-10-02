/**
 * Project slug (URL) ↔ internal data-project id
 */
window.projectRoutes = {
    bySlug: {
        brainogram: { id: 'brain', index: '01', stores: true, webShotsTitle: null },
        bookly: { id: 'bookly', index: '02', stores: false, webShotsTitle: null },
        pulse: { id: 'pulse', index: '03', stores: false, webShotsTitle: null },
        haven: { id: 'haven', index: '04', stores: false, webShotsTitle: null },
        orbit: { id: 'orbit', index: '05', stores: false, webShotsTitle: 'projects.screenshotsDashboard' },
        'black-iris': { id: 'black', index: '06', stores: false, webShotsTitle: 'projects.screenshotsDashboard' },
        vyro: { id: 'vyro', index: '07', stores: false, webShotsTitle: 'projects.screenshotsDashboard' },
        medora: { id: 'medora', index: '08', stores: false, webShotsTitle: null },
        nova: { id: 'nova', index: '09', stores: false, webShotsTitle: null },
        driveon: { id: 'driveon', index: '10', stores: false, webShotsTitle: null },
        taxik: { id: 'taxi', index: '11', stores: true, webShotsTitle: null },
        'expert-world': { id: 'expert', index: '12', stores: true, webShotsTitle: null },
        gamecard: { id: 'game', index: '13', stores: true, webShotsTitle: null },
        'elegant-flower': { id: 'flower', index: '14', stores: true, webShotsTitle: null },
        nicknamelab: { id: 'nick', index: '15', stores: true, webShotsTitle: null },
        masrafji: { id: 'masraf', index: '16', stores: true, webShotsTitle: null },
        washapp: { id: 'wash', index: '17', stores: true, webShotsTitle: null }
    }
};

window.projectRoutes.byId = Object.fromEntries(
    Object.entries(window.projectRoutes.bySlug).map(([slug, meta]) => [meta.id, { slug, ...meta }])
);

window.projectRoutes.getProjectPageUrl = function getProjectPageUrl(projectId) {
    const meta = window.projectRoutes.byId[projectId];
    if (!meta) return resolveSitePath('index.html#projects');
    return resolveSitePath('projects/' + meta.slug + '/');
};
