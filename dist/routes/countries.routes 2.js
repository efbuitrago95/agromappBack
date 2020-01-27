"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var countriesController_controller_1 = __importDefault(require("../controllers/countriesController.controller"));
var countriesCtrl = new countriesController_controller_1.default();
var router = express_1.default.Router();
router.get("/", countriesCtrl.getAll);
router.post("/", countriesCtrl.create);
router.get("/:id", countriesCtrl.getById);
router.put("/", countriesCtrl.update);
router.post("/:id", countriesCtrl.deletedbyId);
exports.default = router;
