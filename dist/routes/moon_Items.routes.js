"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var moon_ItemsController_controller_1 = __importDefault(require("../controllers/moon_ItemsController.controller"));
var moonItemsCtrl = new moon_ItemsController_controller_1.default();
var router = express_1.default.Router();
router.get("/", moonItemsCtrl.getAll);
router.post("/", moonItemsCtrl.create);
router.get("/:id", moonItemsCtrl.getById);
router.put("/", moonItemsCtrl.update);
router.post("/:id", moonItemsCtrl.deletedbyId);
exports.default = router;
