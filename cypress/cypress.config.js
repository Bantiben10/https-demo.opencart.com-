const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },



  "env":{
    "url":"https://demo.opencart.com/",
    "username":"Chinmaya.ben10@gmail.com",
    "password":"Qwerty@123",
    "lawFrmMem": "madhumita",
    "lawFrmAdmin":"manoj",
    "FirstName" : "Chinmaya",
    "LastName" :  "Dhir",

  },
  "screenshotOnRunFailure": true,
  "video": false

});
