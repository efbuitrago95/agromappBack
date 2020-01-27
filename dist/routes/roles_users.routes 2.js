"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var roles_UsersController_controller_1 = __importDefault(require("../controllers/roles_UsersController.controller"));
var roles_usersCtrl = new roles_UsersController_controller_1.default();
var router = express_1.default.Router();
router.get("/", roles_usersCtrl.getAll);
router.post("/", roles_usersCtrl.create);
router.get("/:id", roles_usersCtrl.getById);
router.put("/", roles_usersCtrl.update);
router.post("/:id", roles_usersCtrl.deletedbyId);
exports.default = router;
