import express from "express";
import ItemsController from "../controllers/itemsController.controller";

const itemsCtrl: ItemsController = new ItemsController();
const router = express.Router();

router.get("/", itemsCtrl.getAll);
router.post("/", itemsCtrl.create);
router.get("/:id", itemsCtrl.getById);
router.put("/", itemsCtrl.update);
router.post("/:id", itemsCtrl.deletedbyId);

export default router;