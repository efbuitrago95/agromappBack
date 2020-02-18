import express from "express";
import TypeMoonsController from "../controllers/type_MoonsController.controller";

const typeMoonsCtrl: TypeMoonsController = new TypeMoonsController();
const router = express.Router();

router.get("/", typeMoonsCtrl.getAll);
router.post("/", typeMoonsCtrl.create);
router.get("/:id", typeMoonsCtrl.getById);
router.put("/", typeMoonsCtrl.update);
router.post("/:id", typeMoonsCtrl.deletedbyId);

export default router;
