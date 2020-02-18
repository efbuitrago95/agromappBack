"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var classification_ItemsController_controller_1 = __importDefault(require("../controllers/classification_ItemsController.controller"));
var classificationItemsCtrl = new classification_ItemsController_controller_1.default();
var router = express_1.default.Router();
router.get("/", classificationItemsCtrl.getAll);
router.post("/", classificationItemsCtrl.create);
router.get("/:id", classificationItemsCtrl.getById);
router.put("/", classificationItemsCtrl.update);
router.post("/:id", classificationItemsCtrl.deletedbyId);
exports.default = router;
