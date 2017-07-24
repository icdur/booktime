/*global protractor, browser, expect, module, By*/
var DashBoardNS = {},
    dashboardLocators = require('./dashboardLocators.js'),
    waitFunctions = require('../util/waitFunctions.js');

/**
 * Enter a text in the search service input
 * @param service - service text
 */
DashBoardNS.enterServiceForSearch = function(service){
    var searchElem = browser.findElement(dashboardLocators.containerSearch).findElement(dashboardLocators.inputSearchService);
    waitFunctions.waitForElement(dashboardLocators.inputSearchService);
    searchElem.click();
    searchElem.clear();
    searchElem.sendKeys(service);
};

/**
 * Enter a text in the search location service input
 * @param location - location text
 */
DashBoardNS.selectSearchLocation = function(location){
    var locationElem = browser.findElement(dashboardLocators.containerSearch).findElement(dashboardLocators.inputSearchLocation);
    waitFunctions.waitForElement(dashboardLocators.containerSearch);
    locationElem.click();
    locationElem.clear();
    locationElem.sendKeys(location);
    // waitFunctions.waitForElement(dashboardLocators.menuLocation);
    // browser.findElements(dashboardLocators.menuLocation).then(function(menuItems){
    //     menuItems[menuItems.length - 1].findElements(dashboardLocators.itemMenuLocation).then(function(locationList){
    //         locationList[1].click();
    //     });
    // });
};


/**
 * Perform search for a service from a specific location
 * @param service - service text
 * @param location - location text
 */
DashBoardNS.performSearch = function(service,location){
    DashBoardNS.enterServiceForSearch(service);
    DashBoardNS.selectSearchLocation(location);
    waitFunctions.waitForElement(dashboardLocators.btnSearch);
    browser.findElement(dashboardLocators.btnSearch).click();
};


module.exports = DashBoardNS;




