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
var classifications_model_1 = __importDefault(require("./classifications.model"));
var languages_model_1 = __importDefault(require("./languages.model"));
var MoonItemsModel = /** @class */ (function (_super) {
    __extends(MoonItemsModel, _super);
    function MoonItemsModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MoonItemsModel, "tableName", {
        get: function () {
            return 'MOON_ITEMS';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoonItemsModel, "relationMappings", {
        get: function () {
            return {
                items: {
                    relation: objection_1.Model.HasManyRelation,
                    modelClass: classifications_model_1.default,
                    join: {
                        from: "CLASSIFICATIONS.id",
                        to: "MOON_ITEMS.idClassification"
                    }
                },
                languages: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: languages_model_1.default,
                    join: {
                        from: "CLASSIFICATIONS.idLanguage",
                        to: "LANGUAGES.id"
                    }
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return MoonItemsModel;
}(objection_1.Model));
exports.default = MoonItemsModel;
