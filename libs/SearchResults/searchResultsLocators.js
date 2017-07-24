/*global protractor, browser, expect, module, By*/
var searchResultsLocatorsNS = {};

searchResultsLocatorsNS.itemSearchResult = by.className('search-result-content');
searchResultsLocatorsNS.itemBusinessName = by.className('business-name');

module.exports = searchResultsLocatorsNS;