require('chromedriver')
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

function CustomWorld(){
    this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build();
}

defineSupportCode(function({setWorldConstructor}){
    setWorldConstructor(CustomWord)

});

module.exports = function(){
    this.setDefaultTimeout(60 * 1000);
};