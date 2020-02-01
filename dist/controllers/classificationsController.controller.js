"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classifications_model_1 = __importDefault(require("../models/classifications.model"));
var utils_1 = require("../utils");
var numberItems = 10;
var ClassificationsController = /** @class */ (function () {
    function ClassificationsController() {
        var _this = this;
        this.getAll = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var querySql;
            return __generator(this, function (_a) {
                querySql = classifications_model_1.default.query().eager('languages');
                if (req.query.search) {
                    querySql.where("name", "like", "%" + req.query.search + "%");
                }
                if (req.query.page) {
                    querySql.page(Number(req.query.page) - 1, numberItems);
                }
                if (req.query.language) {
                    querySql.where("idLanguage", req.query.language);
                }
                querySql
                    .then(function (data) {
                    var dataResponse = {};
                    var paginationData = {};
                    if (req.query.page) {
                        paginationData = utils_1.Utils.generatePaging(numberItems, req.query.page, data);
                        dataResponse = {
                            results: data.results,
                            paginationData: paginationData
                        };
                    }
                    else {
                        dataResponse = {
                            results: data,
                            paginationData: paginationData
                        };
                    }
                    res.status(200).send(dataResponse);
                })
                    .catch(function (error) {
                    res.status(200).send(error);
                });
                return [2 /*return*/];
            });
        }); };
        this.create = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                classifications_model_1.default.query()
                    .insert(req.body)
                    .then(function (data) {
                    res.status(200).send(data);
                }).catch(function (e) {
                    res.status(400).send(e);
                });
                return [2 /*return*/];
            });
        }); };
        this.getById = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                classifications_model_1.default.query().eager('languages')
                    .findById(req.params.id)
                    .then(function (data) {
                    res.status(200).send(data);
                }).catch(function (error) {
                    res.status(200).send(error);
                });
                return [2 /*return*/];
            });
        }); };
        this.update = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                classifications_model_1.default.query()
                    .patchAndFetchById(req.body.id, req.body)
                    .then(function (res1) {
                    res.status(200).send(res1);
                }).catch(function (e) {
                    res.status(200).send(e);
                });
                return [2 /*return*/];
            });
        }); };
        this.deletedbyId = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                classifications_model_1.default.query()
                    .deleteById(req.params.id)
                    .then(function (data) {
                    res.status(200).send(data);
                }).catch(function (error) {
                    res.status(200).send(error);
                });
                return [2 /*return*/];
            });
        }); };
    }
    return ClassificationsController;
}());
exports.default = ClassificationsController;
