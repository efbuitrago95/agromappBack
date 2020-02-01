"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var classificationsController_controller_1 = __importDefault(require("../controllers/classificationsController.controller"));
var classificationsCtrl = new classificationsController_controller_1.default();
var router = express_1.default.Router();
router.get("/", classificationsCtrl.getAll);
router.post("/", classificationsCtrl.create);
router.get("/:id", classificationsCtrl.getById);
router.put("/", classificationsCtrl.update);
router.post("/:id", classificationsCtrl.deletedbyId);
exports.default = router;
