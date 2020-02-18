import express from "express";
import MoonsController from "../controllers/moonsController.controller";

const moonsCtrl: MoonsController = new MoonsController();
const router = express.Router();

router.get("/", moonsCtrl.getAll);
router.post("/", moonsCtrl.create);
router.get("/:id", moonsCtrl.getById);
router.put("/", moonsCtrl.update);
router.post("/:id", moonsCtrl.deletedbyId);

export default router;
