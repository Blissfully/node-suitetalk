"use strict";

const SearchField = require("./common/searchField");

class SearchStringField extends SearchField {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchStringField";
        this._searchValueXsdType = "xsd:string"
    }
}

module.exports = SearchStringField;
