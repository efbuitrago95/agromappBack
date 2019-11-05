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
var countries_model_1 = __importDefault(require("./countries.model"));
var permissions_model_1 = __importDefault(require("./permissions.model"));
var UsersModel = /** @class */ (function (_super) {
    __extends(UsersModel, _super);
    function UsersModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UsersModel, "tableName", {
        get: function () {
            return 'USERS';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersModel, "relationMappings", {
        get: function () {
            return {
                countries: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: countries_model_1.default,
                    join: {
                        from: 'USERS.idCountry',
                        to: 'COUNTRIES.id'
                    }
                },
                permissions: {
                    relation: objection_1.Model.HasManyRelation,
                    modelClass: permissions_model_1.default,
                    join: {
                        from: 'USERS.id',
                        to: 'PERMISSIONS.idUser'
                    }
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return UsersModel;
}(objection_1.Model));
exports.default = UsersModel;
