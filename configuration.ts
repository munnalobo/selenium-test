import { Config, browser } from "protractor"

export let config: Config = {
framework:"jasmine",
capabilities: {
    browserName : 'chrome'
},

specs : [
    "./e2eTests/firstTest.specs.js",
    "./e2eTests/calc.ts"
],

seleniumAddress:'http://localhost:4444/wd/hub'
}