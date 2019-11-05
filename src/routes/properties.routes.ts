import express from "express";
import PropertiesController from "../controllers/propertiesController.controller";

const propertiesCtrl: PropertiesController = new PropertiesController();
const router = express.Router();

router.get("/", propertiesCtrl.getAll);
router.post("/", propertiesCtrl.create);
router.get("/:id", propertiesCtrl.getById);
router.get("/getPropertiesByCropId/:id", propertiesCtrl.getPropertiesByCropId);
router.put("/", propertiesCtrl.update);
router.post("/:id", propertiesCtrl.deletedbyId);

export default router;