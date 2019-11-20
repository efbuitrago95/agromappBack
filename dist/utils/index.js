"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.generatePaging = function (numberItems, currentPage, data) {
        var totalPages = 1;
        var previousPage = false;
        var nextPage = false;
        if (Math.floor(data.total / numberItems) === data.total / numberItems) {
            totalPages = data.total / numberItems;
        }
        else {
            totalPages = Math.floor(data.total / numberItems) + 1;
        }
        if (totalPages > currentPage) {
            nextPage = true;
        }
        if (currentPage > 1) {
            previousPage = true;
        }
        var paginationData = {
            totalItems: data.total,
            totalItemsOnPage: data.results.length,
            totalPages: totalPages,
            previousPage: previousPage,
            currentPage: Number(currentPage),
            nextPage: nextPage
        };
        return paginationData;
    };
    return Utils;
}());
exports.Utils = Utils;
