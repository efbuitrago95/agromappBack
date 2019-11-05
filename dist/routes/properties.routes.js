"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var propertiesController_controller_1 = __importDefault(require("../controllers/propertiesController.controller"));
var propertiesCtrl = new propertiesController_controller_1.default();
var router = express_1.default.Router();
router.get("/", propertiesCtrl.getAll);
router.post("/", propertiesCtrl.create);
router.get("/:id", propertiesCtrl.getById);
router.get("/getPropertiesByCropId/:id", propertiesCtrl.getPropertiesByCropId);
router.put("/", propertiesCtrl.update);
router.post("/:id", propertiesCtrl.deletedbyId);
exports.default = router;
