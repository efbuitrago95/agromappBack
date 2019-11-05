"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var rolesController_controller_1 = __importDefault(require("../controllers/rolesController.controller"));
var rolesCtrl = new rolesController_controller_1.default();
var router = express_1.default.Router();
router.get("/", rolesCtrl.getAll);
router.post("/", rolesCtrl.create);
router.get("/:id", rolesCtrl.getById);
router.put("/", rolesCtrl.update);
router.post("/:id", rolesCtrl.deletedbyId);
exports.default = router;
