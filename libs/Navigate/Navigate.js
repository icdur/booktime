/*global protractor, browser, expect, module, By*/
var NavigateNS = {},
    util = require('../util/util.js'),
    waitFunctions = require('../util/waitFunctions.js');


/**
 * Go to myTime web site
 */
NavigateNS.goToDashBoard = function () {
    browser.driver.get(util.BASE_PAGE_URI);
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;
    waitFunctions.waitForUrl(util.BASE_PAGE_URI);
};

module.exports = NavigateNS;