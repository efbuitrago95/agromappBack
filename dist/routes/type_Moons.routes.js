"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var type_MoonsController_controller_1 = __importDefault(require("../controllers/type_MoonsController.controller"));
var typeMoonsCtrl = new type_MoonsController_controller_1.default();
var router = express_1.default.Router();
router.get("/", typeMoonsCtrl.getAll);
router.post("/", typeMoonsCtrl.create);
router.get("/:id", typeMoonsCtrl.getById);
router.put("/", typeMoonsCtrl.update);
router.post("/:id", typeMoonsCtrl.deletedbyId);
exports.default = router;
