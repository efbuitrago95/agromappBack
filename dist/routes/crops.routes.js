"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cropsController_controller_1 = __importDefault(require("../controllers/cropsController.controller"));
var cropsCtrl = new cropsController_controller_1.default();
var router = express_1.default.Router();
router.get("/", cropsCtrl.getAll);
router.post("/", cropsCtrl.create);
router.get("/:id", cropsCtrl.getById);
router.put("/", cropsCtrl.update);
router.post("/:id", cropsCtrl.deletedbyId);
exports.default = router;
