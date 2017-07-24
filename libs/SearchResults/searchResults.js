/*global protractor, browser, expect, module, By*/
var SearchResultsNS = {},
    searchResultsLocators = require('./searchResultsLocators.js'),
    waitFunctions = require('../util/waitFunctions.js');

/**
 * Return total number of search results displayed
 */
SearchResultsNS.getNumberOfTotalResults = function () {
    var deferred = protractor.promise.defer();
    waitFunctions.waitForElement(searchResultsLocators.itemSearchResult);
    browser.findElements(searchResultsLocators.itemSearchResult).then(function(items){
        deferred.fulfill(items.length);
    });

    return deferred.promise;
};

/**
 * Select first business from the search results list
 */
SearchResultsNS.selectFirstBusiness = function(){
    waitFunctions.waitForElement(searchResultsLocators.itemSearchResult);
    browser.findElements(searchResultsLocators.itemBusinessName).then(function(items){
        items[0].click();
    });
};

module.exports = SearchResultsNS;




