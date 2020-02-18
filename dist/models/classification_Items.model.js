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
var languages_model_1 = __importDefault(require("./languages.model"));
var moon_Items_model_1 = __importDefault(require("./moon_Items.model")); //pendiente
var classification_ItemsModel = /** @class */ (function (_super) {
    __extends(classification_ItemsModel, _super);
    function classification_ItemsModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(classification_ItemsModel, "tableName", {
        get: function () {
            return "CLASSIFICATION_ITEMS";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(classification_ItemsModel, "relationMappings", {
        get: function () {
            return {
                moon_items: {
                    relation: objection_1.Model.HasManyRelation,
                    modelClass: moon_Items_model_1.default,
                    join: {
                        from: "CLASSIFICATION_ITEMS.id",
                        to: "MOON_ITEMS.idClassificationItem"
                    }
                },
                languages: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: languages_model_1.default,
                    join: {
                        from: "CLASSIFICATION_ITEMS.idLanguage",
                        to: "LANGUAGES.id"
                    }
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return classification_ItemsModel;
}(objection_1.Model));
exports.default = classification_ItemsModel;
