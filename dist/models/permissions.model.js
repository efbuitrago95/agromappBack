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
var permissions_model_1 = __importDefault(require("./permissions.model"));
var countriesModel = /** @class */ (function (_super) {
    __extends(countriesModel, _super);
    function countriesModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(countriesModel, "tableName", {
        get: function () {
            return 'PERMISSIONS';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(countriesModel, "relationMappings", {
        get: function () {
            return {
                languages: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: permissions_model_1.default,
                    join: {
                        from: 'PERMISSIONS.idLanguage',
                        to: 'LANGUAGES.id'
                    }
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return countriesModel;
}(objection_1.Model));
exports.default = countriesModel;
