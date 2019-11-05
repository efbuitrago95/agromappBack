import express from "express";
import Roles_UsersController from "../controllers/roles_UsersController.controller";

const roles_usersCtrl: Roles_UsersController = new Roles_UsersController();
const router = express.Router();

router.get("/", roles_usersCtrl.getAll);
router.post("/", roles_usersCtrl.create);
router.get("/:id", roles_usersCtrl.getById);
router.put("/", roles_usersCtrl.update);
router.post("/:id", roles_usersCtrl.deletedbyId);

export default router;