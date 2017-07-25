/*global protractor, browser, expect, module, By*/
var BusinessPageLocatorsNS = {};

BusinessPageLocatorsNS.btnBook = by.css('.btx-purple.btx-flat.go-to-timepicker');
BusinessPageLocatorsNS.containerBusinessService = by.css('.panel.deal-container');
BusinessPageLocatorsNS.itemServiceName = by.className('panel-heading');
BusinessPageLocatorsNS.containerBookingSlots = by.className('mt-slot-container');
BusinessPageLocatorsNS.itemBookingSlot = by.className('slot');
BusinessPageLocatorsNS.itemSlotTime = by.className('time');
BusinessPageLocatorsNS.itemReservedSlotTime = by.className('summary-appointment-time');
BusinessPageLocatorsNS.linkHeader = by.tagName('li');

module.exports = BusinessPageLocatorsNS;