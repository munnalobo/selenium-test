"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
fdescribe('open browser go to goole.com', function () {
    beforeEach(function () {
        protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
        protractor_1.browser.waitForAngularEnabled(false);
    });
    it('launch browser check', function () {
        protractor_1.browser.waitForAngularEnabled(false);
        expect(protractor_1.browser.getTitle()).toContain('Super');
        protractor_1.browser.sleep(5000);
    });
    fit('type your name', function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.element(protractor_1.by.className('input-small')).sendKeys('who are you?');
        protractor_1.browser.sleep(5000);
    });
});
