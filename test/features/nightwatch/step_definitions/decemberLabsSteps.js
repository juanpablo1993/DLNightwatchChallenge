const {Given, Then, When, Before} = require('@cucumber/cucumber');

Given(/^User open the December Labs page$/, function() {
  return browser.navigateTo('https://inhouse.decemberlabs.com/');
});

Given(/^User click on Get In Touch button$/, async function() {
  await browser.isVisible
  browser.maximizeWindow()
  browser.waitForElementVisible('#menu-item-846', 5000)
  browser.click('#menu-item-846');
  }
);

When(/^User see the popup click on button Send$/, function() {
  browser.waitForElementVisible('.contact-form-heading.center', 5000)
  browser.assert.visible('.contact-form-heading.center')
  browser.assert.textEquals('.contact-form-heading.center', 'Get In Touch')
  browser.click('#wpforms-submit-872');
});

Then(/^The border of fields turning red$/, function() {
  browser.pause(1000)
  browser.getCssProperty('#wpforms-872-field_0', 'border-bottom-color', function(result) {
    this.assert.strictEqual(result.value, 'rgba(255, 0, 0, 1)')
  })
  browser.getCssProperty('#wpforms-872-field_1', 'border-bottom-color', function(result) {
    this.assert.strictEqual(result.value, 'rgba(255, 0, 0, 1)')
  })
  browser.getCssProperty('#wpforms-872-field_6', 'border-bottom-color', function(result) {
    this.assert.strictEqual(result.value, 'rgba(255, 0, 0, 1)')
  })
  browser.getCssProperty('#wpforms-872-field_2', 'border-bottom-color', function(result) {
    this.assert.strictEqual(result.value, 'rgba(255, 0, 0, 1)')
  })
});

Then(/^The border of fields is not red if is completed$/, function() {
  browser.setValue('#wpforms-872-field_0', 'Juan Pablo')
  browser.setValue('#wpforms-872-field_1', 'JuanPablo@gmail.com')
  browser.setValue('#wpforms-872-field_6', 'Juan Pablo')
  browser.setValue('#wpforms-872-field_2', 'Juan Pablo')
  browser.click('.contact-form-heading.center')
  browser.pause(1000)
  browser.getCssProperty('#wpforms-872-field_0', 'border-bottom-color', function(result) {
    this.assert.strictEqual(result.value, 'rgba(0, 0, 0, 1)')
  })
  browser.getCssProperty('#wpforms-872-field_1', 'border-bottom-color', function(result) {
    this.assert.strictEqual(result.value, 'rgba(0, 0, 0, 1)')
  })
  browser.getCssProperty('#wpforms-872-field_6', 'border-bottom-color', function(result) {
    this.assert.strictEqual(result.value, 'rgba(0, 0, 0, 1)')
  })
  browser.getCssProperty('#wpforms-872-field_2', 'border-bottom-color', function(result) {
    this.assert.strictEqual(result.value, 'rgba(0, 0, 0, 1)')
  })

});



