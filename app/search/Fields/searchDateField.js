"use strict";

const SearchField = require("./common/searchField");

class SearchDateField extends SearchField {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchDateField";
        this._searchValueXsdType = "xsd:dateTime"
    }
}

module.exports = SearchDateField;
