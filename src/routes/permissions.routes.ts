import express from "express";
import PermissionsController from "../controllers/permissionsController.controller";

const PermissionsCtrl: PermissionsController = new PermissionsController();
const router = express.Router();

router.get("/", PermissionsCtrl.getAll);
router.post("/", PermissionsCtrl.create);
router.get("/:id", PermissionsCtrl.getById);
router.put("/", PermissionsCtrl.update);
router.post("/:id", PermissionsCtrl.deletedbyId);

export default router;