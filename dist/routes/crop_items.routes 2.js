"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var crop_ItemsController_controller_1 = __importDefault(require("../controllers/crop_ItemsController.controller"));
var cropItemsCtrl = new crop_ItemsController_controller_1.default();
var router = express_1.default.Router();
router.get("/", cropItemsCtrl.getAll);
router.post("/", cropItemsCtrl.create);
router.get("/:id", cropItemsCtrl.getById);
router.put("/", cropItemsCtrl.update);
router.post("/:id", cropItemsCtrl.deletedbyId);
exports.default = router;
