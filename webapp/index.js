sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function(XMLView) {
    "use strict";

    new ComponentContainer({
        name: "root",
        settings: {
            id: "walkthrough"
        },
        async: true
    }).placeAt("content");

});