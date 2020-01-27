"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var categoriesController_controller_1 = __importDefault(require("../controllers/categoriesController.controller"));
var categoriesCtrl = new categoriesController_controller_1.default();
var router = express_1.default.Router();
router.get("/", categoriesCtrl.getAll);
router.post("/", categoriesCtrl.create);
router.get("/:id", categoriesCtrl.getById);
router.put("/", categoriesCtrl.update);
router.post("/:id", categoriesCtrl.deletedbyId);
exports.default = router;
