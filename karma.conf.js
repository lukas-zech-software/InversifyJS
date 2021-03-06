var browsers = [
    "Firefox",
    "Chrome",
    "IE"
];

var plugins = [
    "karma-mocha-reporter",
    "karma-mocha",
    "karma-chai",
    "karma-sinon",
    "karma-firefox-launcher",
    "karma-chrome-launcher",
    "karma-ie-launcher"
];

module.exports = function (config) {

  "use strict";

  config.set({
    singleRun: true,
    basePath: "",
    frameworks: ["mocha", "chai", "sinon"],
    browsers: browsers,
    reporters: ["mocha"],
    plugins : plugins,
    files : [
        { pattern: "node_modules/reflect-metadata/Reflect.js", include: true },
        { pattern: "node_modules/bluebird/js/browser/bluebird.js", include: true },
        { pattern: "temp/bundle.test.js", included: true }
    ],
    port: 9876,
    colors: true,
    autoWatch: false,
    logLevel: config.LOG_INFO
  });

};