import { browser, element, by } from "protractor"

fdescribe("Calculator test", function(){

    fit("invoke calc app",function(){
        browser.get("https://juliemr.github.io/protractor-demo/");
        browser.sleep(3000);
    })

});
