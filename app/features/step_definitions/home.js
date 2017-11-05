var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
  Given('the initial page', function(callback) {
    this.driver.get('http://localhost:3003/');
    callback();
  });
  Given('I have de content table in body', function(callback) {
    this.driver.findElement({css:'body'})
    callback();
  });

  then('I should have text {arg1:stringInDoubleQuotes} on page', function (title, callback) {
     this.driver.findElement({css: h1}).then(function(h1) {
        this.driver.findElements({css: 'h1'}).then(function(h1){
            h1[0].getAtribute("innerText").then(function(text){
                if(text == title){
                    callback();
                     } else {
                         callback(new Error("the title of body is diferent, body:(" + text + "),test:(" + title + ")"));
                     }
            });
        });
     
    });
  });

  Then('I should see {string}', function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
});