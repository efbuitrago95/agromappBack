import express from "express";
import UsersController from "../controllers/users.controller";

const userCtrl: UsersController = new UsersController();
const router = express.Router();

router.get("/", userCtrl.getAll);
router.post("/", userCtrl.create);
router.get("/:id", userCtrl.getById);
router.put("/", userCtrl.update);
router.post("/:id", userCtrl.deletedbyId);

export default router;