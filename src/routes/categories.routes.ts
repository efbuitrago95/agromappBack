import express from "express";
import CategoriesController from "../controllers/categoriesController.controller";

const categoriesCtrl: CategoriesController = new CategoriesController();
const router = express.Router();

router.get("/", categoriesCtrl.getAll);
router.post("/", categoriesCtrl.create);
router.get("/:id", categoriesCtrl.getById);
router.put("/", categoriesCtrl.update);
router.post("/:id", categoriesCtrl.deletedbyId);

export default router;