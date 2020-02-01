import express from "express";
import ClassificationsController from "../controllers/classificationsController.controller";

const classificationsCtrl: ClassificationsController = new ClassificationsController();
const router = express.Router();

router.get("/", classificationsCtrl.getAll);
router.post("/", classificationsCtrl.create);
router.get("/:id", classificationsCtrl.getById);
router.put("/", classificationsCtrl.update);
router.post("/:id", classificationsCtrl.deletedbyId);

export default router;
