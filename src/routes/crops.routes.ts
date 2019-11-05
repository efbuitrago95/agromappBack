import express from "express";
import CropsController from "../controllers/cropsController.controller";

const cropsCtrl: CropsController = new CropsController();
const router = express.Router();

router.get("/", cropsCtrl.getAll);
router.post("/", cropsCtrl.create);
router.get("/:id", cropsCtrl.getById);
router.put("/", cropsCtrl.update);
router.post("/:id", cropsCtrl.deletedbyId);

export default router;