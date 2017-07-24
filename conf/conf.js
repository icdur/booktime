/*global exports, require, jasmine*/
// An example configuration file.
exports.config = {
    // The address of a running selenium server.

    seleniumAddress: 'http://localhost:4444/wd/hub',

    //  seleniumAddress: 'http://192.168.56.175:4444/wd/hub',/*---- EDIT ADDRESS, INSERT ADDRESS FOR THE MACHINE RUNNING THE SELENIUM SERVER----*/
    // seleniumAddress: 'https://ced-qa.equineregister.net',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--start-maximized','--disable-extensions']
        }
    },
    getPageTimeout: 20000,
    allScriptsTimeout:500000,
    framework: 'jasmine2',
    onPrepare: function () {
        // The require statement must be down here, since jasmine-reporters
        // needs jasmine to be in the global and protractor does not guarantee
        // this until inside the onPrepare function.

        // var HtmlReporter = require('protractor-html-screenshot-reporter');
        // require('jasmine-reporters');
        // jasmine.getEnv().addReporter(
        //   //new HtmlReporter({baseDirectory: '/tmp/screenshots'}),
        //   new jasmine.JUnitXmlReporter('/var/lib/jenkins/jobs/build', true, true)
        //   //new ScreenShotReporter({baseDirectory: '/tmp/screenshots', takeScreenShotsOnlyForFailedSpecs: true});
        // );
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.

    specs: ['../tests/01_Booking.js'],


    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 6000000
    }
};
