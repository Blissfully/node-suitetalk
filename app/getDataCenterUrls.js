"use strict";

const BaseObject = require("./baseObject");

class DataCenterUrls extends BaseObject {

    constructor() {
        console.log("hello")
        super();
        this.account = undefined;
    }

    _getSoapType() {
        return "getDataCenterUrls";
    }


    getNode() {
        const type = this._getSoapType();

        if (!type) {
            throw new Error(`Invalid SOAP type ${type}`);
        }


        const node = {};

        node[type] = {};
        node["account"] = this.account;
        console.log({ node })
        return node;
    }
}

module.exports = DataCenterUrls;
