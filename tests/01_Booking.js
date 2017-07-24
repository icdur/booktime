describe('myTime - ', function () {
    var navigate = require('../libs/Navigate/Navigate.js'),
        dashBoard = require('../libs/Dashboard/dashboard.js'),
        searchResults = require('../libs/SearchResults/searchResults.js'),
        businessPage = require('../libs/BusinessPage/businessPage.js'),
        waitFunctions = require('../libs/util/waitFunctions.js');

    it('Book scenario', function () {
        var service = 'Haircut',
            location = 'Seattle, WA';

        // 1. Open the www.mytime.com home page
        navigate.goToDashBoard();

        // 2. Search for “haircut” in “seattle, wa”
        dashBoard.performSearch(service,location);

        // 3. Verify that multiple results are shown
        expect(searchResults.getNumberOfTotalResults()).toBeGreaterThan(1);

        // 4. Click the name of the first available business
        searchResults.selectFirstBusiness();

        // 5. On the next screen click the “Book” button for the “Haircut” service
        businessPage.pressBookService(service);

        // 6. Verify that the user is presented with a list of available time slots with at least 2 entries
        expect(businessPage.getNumberOfBookingSlots()).toBeGreaterThan(1);


        var slotElem = businessPage.getFirstBookingSlot();
        slotElem.then(function(slot){
            // 7. Choose the first time slot
            slot[0].click();

            // 8. Verify the appointment time on the next page matches the time selected
            expect(businessPage.getBookingReservedTime()).toContain(slot[1]);
        });
    });

});

