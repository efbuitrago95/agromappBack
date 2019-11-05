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
var items_model_1 = __importDefault(require("./items.model"));
var languages_model_1 = __importDefault(require("./languages.model"));
var propertiesModel = /** @class */ (function (_super) {
    __extends(propertiesModel, _super);
    function propertiesModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(propertiesModel, "tableName", {
        get: function () {
            return 'PROPERTIES';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(propertiesModel, "relationMappings", {
        get: function () {
            return {
                items: {
                    relation: objection_1.Model.HasManyRelation,
                    modelClass: items_model_1.default,
                    join: {
                        from: 'PROPERTIES.id',
                        to: 'ITEMS.idProperty'
                    }
                },
                languages: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: languages_model_1.default,
                    join: {
                        from: 'PROPERTIES.idLanguage',
                        to: 'LANGUAGES.id'
                    }
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return propertiesModel;
}(objection_1.Model));
exports.default = propertiesModel;
