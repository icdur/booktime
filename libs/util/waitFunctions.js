/*global protractor, browser, expect, require, module, by, element*/
var waitFunctionsNS = {};

/**
 * Waits for a element to be present in DOM
 * @param elem - element locator
 */
waitFunctionsNS.waitForElement = function (elem) {
    browser.driver.wait(function () {
        return browser.driver.isElementPresent(elem);
    }, 30000);
};

/**
 * Waits untill the current url is the desired one
 * @param expectedUrl - desired url
 */
waitFunctionsNS.waitForUrl = function (expectedUrl) {
    browser.wait(function () {
        return browser.getCurrentUrl().then(function (url) {
            return url === expectedUrl;
        });
    }, 200000, "URL hasn't changed to " + expectedUrl);
};

module.exports = waitFunctionsNS;