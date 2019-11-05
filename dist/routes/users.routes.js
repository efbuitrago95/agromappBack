"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_controller_1 = __importDefault(require("../controllers/users.controller"));
var userCtrl = new users_controller_1.default();
var router = express_1.default.Router();
router.get("/", userCtrl.getAll);
router.post("/", userCtrl.create);
router.get("/:id", userCtrl.getById);
router.put("/", userCtrl.update);
router.post("/:id", userCtrl.deletedbyId);
exports.default = router;
