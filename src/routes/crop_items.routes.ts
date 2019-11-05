import express from "express";
import CropItemsController from "../controllers/crop_ItemsController.controller";

const cropItemsCtrl: CropItemsController = new CropItemsController();
const router = express.Router();

router.get("/", cropItemsCtrl.getAll);
router.post("/", cropItemsCtrl.create);
router.get("/:id", cropItemsCtrl.getById);
router.put("/", cropItemsCtrl.update);
router.post("/:id", cropItemsCtrl.deletedbyId);

export default router;