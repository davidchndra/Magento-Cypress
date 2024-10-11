const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //Waiting for 8000ms
    defaultCommandTimeout: 8000,
    //Video after testing
    video: true,
    //Disable login security
    chromeWebSecurity: false,
    //Disable autorun after saving file, only works on UI.
    watchForFileChanges: false,
  },
});
