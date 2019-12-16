import {browser, by, element} from "protractor"

fdescribe('open browser go to goole.com', () => {

    beforeEach(() => {

        browser.get('https://juliemr.github.io/protractor-demo/');
        browser.waitForAngularEnabled(false);

    });

    it('launch browser check', () => {
        browser.waitForAngularEnabled(false);
        expect(browser.getTitle()).toContain('Super');
        browser.sleep(5000);
    });

    fit('type your name', () => {
        browser.waitForAngularEnabled(false);
        element(by.className('input-small')).sendKeys('who are you?');
        browser.sleep(5000);

    })
}); 
