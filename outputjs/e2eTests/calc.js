"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
fdescribe("Calculator test", function () {
    fit("invoke calc app", function () {
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        protractor_1.browser.sleep(3000);
    });
});
