const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://newgencoding.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
