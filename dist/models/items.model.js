"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var objection_1 = require("objection");
var crop_items_model_1 = __importDefault(require("./crop_items.model"));
var properties_model_1 = __importDefault(require("./properties.model"));
var itemsModel = /** @class */ (function (_super) {
    __extends(itemsModel, _super);
    function itemsModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(itemsModel, "tableName", {
        get: function () {
            return 'ITEMS';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(itemsModel, "relationMappings", {
        get: function () {
            return {
                crop_items: {
                    relation: objection_1.Model.HasManyRelation,
                    modelClass: crop_items_model_1.default,
                    join: {
                        from: 'ITEMS.id',
                        to: 'CROP_ITEMS.idItem'
                    }
                },
                properties: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: properties_model_1.default,
                    join: {
                        from: 'ITEMS.idProperty',
                        to: 'PROPERTIES.id'
                    }
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return itemsModel;
}(objection_1.Model));
exports.default = itemsModel;
