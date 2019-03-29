"use strict";

/**
 * Main Package
 */
const NetSuite = {
    Configuration: require("./configuration"),
    Record: require("./record"),
    Search: require("./search"),
    Service: require("./service"),
    Soap: require("./soap"),
    Util: require("./util"),
    GetDataCenterUrls: require("./getDataCenterUrls")
};

module.exports = NetSuite;
