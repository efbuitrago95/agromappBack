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
var type_Moons_model_1 = __importDefault(require("./type_Moons.model"));
var languages_model_1 = __importDefault(require("./languages.model"));
var moonsModel = /** @class */ (function (_super) {
    __extends(moonsModel, _super);
    function moonsModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(moonsModel, "tableName", {
        get: function () {
            return 'MOONS';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(moonsModel, "relationMappings", {
        get: function () {
            return {
                items: {
                    relation: objection_1.Model.HasManyRelation,
                    modelClass: type_Moons_model_1.default,
                    join: {
                        from: "TYPE_MOONS.id",
                        to: "MOONS.idTypeMoon"
                    }
                },
                languages: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: languages_model_1.default,
                    join: {
                        from: "MOONS.idLanguage",
                        to: "LANGUAGES.id"
                    }
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return moonsModel;
}(objection_1.Model));
exports.default = moonsModel;
