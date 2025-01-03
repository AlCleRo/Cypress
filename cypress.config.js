const { defineConfig } = require('cypress');

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'custom-title',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false
    },
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require('cypress-mochawesome-reporter/plugin')(on);
        }
    },
    video: false,
    screenshotsFolder: 'reports/images',
    scrollBehavior: false,
    retries: {
        runMode: 1,
        openMode: 1
    },
    watchForFileChanges: false
});
