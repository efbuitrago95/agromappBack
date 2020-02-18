import express from "express";
import MoonItemsController from "../controllers/moon_ItemsController.controller";

const moonItemsCtrl: MoonItemsController = new MoonItemsController();
const router = express.Router();

router.get("/", moonItemsCtrl.getAll);
router.post("/", moonItemsCtrl.create);
router.get("/:id", moonItemsCtrl.getById);
router.put("/", moonItemsCtrl.update);
router.post("/:id", moonItemsCtrl.deletedbyId);

export default router;
