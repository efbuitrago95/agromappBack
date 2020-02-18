"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var moonsController_controller_1 = __importDefault(require("../controllers/moonsController.controller"));
var moonsCtrl = new moonsController_controller_1.default();
var router = express_1.default.Router();
router.get("/", moonsCtrl.getAll);
router.post("/", moonsCtrl.create);
router.get("/:id", moonsCtrl.getById);
router.put("/", moonsCtrl.update);
router.post("/:id", moonsCtrl.deletedbyId);
exports.default = router;
