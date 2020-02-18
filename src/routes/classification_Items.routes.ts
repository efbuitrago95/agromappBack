import express from "express";
import ClassificationItemsController from "../controllers/classification_ItemsController.controller";

const classificationItemsCtrl: ClassificationItemsController = new ClassificationItemsController();
const router = express.Router();

router.get("/", classificationItemsCtrl.getAll);
router.post("/", classificationItemsCtrl.create);
router.get("/:id", classificationItemsCtrl.getById);
router.put("/", classificationItemsCtrl.update);
router.post("/:id", classificationItemsCtrl.deletedbyId);

export default router;
