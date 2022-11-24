const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPatten: "cypress/e2e/features/*.feature",
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
  },
});
