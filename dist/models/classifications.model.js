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
var crops_model_1 = __importDefault(require("./crops.model"));
var classificationsModel = /** @class */ (function (_super) {
    __extends(classificationsModel, _super);
    function classificationsModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(classificationsModel, "tableName", {
        get: function () {
            return "CLASSIFICATIONS";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(classificationsModel, "relationMappings", {
        get: function () {
            return {
                items: {
                    relation: objection_1.Model.HasManyRelation,
                    modelClass: crops_model_1.default,
                    join: {
                        from: "CLASSIFICATIONS.id",
                        to: "CROPS.idClassification"
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
    return classificationsModel;
}(objection_1.Model));
exports.default = classificationsModel;
