/*global protractor, browser, expect, module, By*/
var DashBoardLocatorsNS = {};

DashBoardLocatorsNS.btnSignIn = by.css('.login-modal-link.sign_in.dropdown');
DashBoardLocatorsNS.btnSearch = by.css('.flat-blue-btn.btn-search');
DashBoardLocatorsNS.containerSearch = by.className('search-container');
DashBoardLocatorsNS.inputSearchService = by.id('search-query');
DashBoardLocatorsNS.inputSearchLocation = by.id('search-location');
DashBoardLocatorsNS.menuLocation = by.css('.ui-autocomplete.ui-menu.ui-widget.ui-widget-content.ui-corner-all');
DashBoardLocatorsNS.itemMenuLocation = by.className('ui-menu-item');

module.exports = DashBoardLocatorsNS;