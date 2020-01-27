"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var itemsController_controller_1 = __importDefault(require("../controllers/itemsController.controller"));
var itemsCtrl = new itemsController_controller_1.default();
var router = express_1.default.Router();
router.get("/", itemsCtrl.getAll);
router.post("/", itemsCtrl.create);
router.get("/:id", itemsCtrl.getById);
router.put("/", itemsCtrl.update);
router.post("/:id", itemsCtrl.deletedbyId);
exports.default = router;
