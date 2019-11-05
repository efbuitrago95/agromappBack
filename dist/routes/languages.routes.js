"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var languageController_controller_1 = __importDefault(require("../controllers/languageController.controller"));
var languageCtrl = new languageController_controller_1.default();
var router = express_1.default.Router();
router.get("/", languageCtrl.getAll);
router.post("/", languageCtrl.create);
router.get("/:id", languageCtrl.getById);
router.put("/", languageCtrl.update);
router.post("/:id", languageCtrl.deletedbyId);
exports.default = router;
