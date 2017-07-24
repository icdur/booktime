/*global protractor, browser, expect, module, By*/
var BusinessPageNS = {},
    businessPageLocators = require('./businessPageLocators.js'),
    waitFunctions = require('../util/waitFunctions.js');

/**
 * Return Service Item from the service items list
 * @param service - service name
 */
BusinessPageNS.getServiceItem = function (service) {
    var deferred = protractor.promise.defer();
    waitFunctions.waitForElement(businessPageLocators.containerBusinessService);
    browser.findElements(businessPageLocators.containerBusinessService).then(function(items){
        items.forEach(function (item) {
           item.findElement(businessPageLocators.itemServiceName).getText().then(function(itemText){
             if(itemText == service){
              deferred.fulfill(item);
             };
           });
        });
    });

    return deferred.promise;
};

/**
 * Press Book button for a specific service
 * @param service - service name
 */
BusinessPageNS.pressBookService = function (service) {
    BusinessPageNS.getServiceItem(service).then(function(serviceElem){
       serviceElem.findElement(businessPageLocators.btnBook).click();
    });
};


/**
 * Return total number of booking slot available for a specific service
 */
BusinessPageNS.getNumberOfBookingSlots = function () {
    var deferred = protractor.promise.defer();
    waitFunctions.waitForElement(businessPageLocators.containerBookingSlots);
    browser.findElements(businessPageLocators.itemBookingSlot).then(function(items){
        deferred.fulfill(items.length);
    });

    return deferred.promise;
};

/**
 * Return first booking slot element from the page and the time for it
 */
BusinessPageNS.getFirstBookingSlot = function () {
    var deferred = protractor.promise.defer();
    browser.findElements(businessPageLocators.itemBookingSlot).then(function(items){
        items[0].findElement(businessPageLocators.itemSlotTime).getText().then(function(time){
            deferred.fulfill([items[0],time]);
        });
    });

    return deferred.promise;
};

/**
 * Return booking reserved time from the last step
 */
BusinessPageNS.getBookingReservedTime = function () {
    waitFunctions.waitForElement(businessPageLocators.itemReservedSlotTime);
    return browser.findElement(businessPageLocators.itemReservedSlotTime).getText();
};
module.exports = BusinessPageNS;




