"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var permissionsController_controller_1 = __importDefault(require("../controllers/permissionsController.controller"));
var PermissionsCtrl = new permissionsController_controller_1.default();
var router = express_1.default.Router();
router.get("/", PermissionsCtrl.getAll);
router.post("/", PermissionsCtrl.create);
router.get("/:id", PermissionsCtrl.getById);
router.put("/", PermissionsCtrl.update);
router.post("/:id", PermissionsCtrl.deletedbyId);
exports.default = router;
