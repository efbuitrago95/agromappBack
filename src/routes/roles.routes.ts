import express from "express";
import RolesController from "../controllers/rolesController.controller";

const rolesCtrl: RolesController = new RolesController();
const router = express.Router();

router.get("/", rolesCtrl.getAll);
router.post("/", rolesCtrl.create);
router.get("/:id", rolesCtrl.getById);
router.put("/", rolesCtrl.update);
router.post("/:id", rolesCtrl.deletedbyId);

export default router;