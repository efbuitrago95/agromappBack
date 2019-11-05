import express from "express";
import CountriesController from "../controllers/countriesController.controller";

const countriesCtrl: CountriesController = new CountriesController();
const router = express.Router();

router.get("/", countriesCtrl.getAll);
router.post("/", countriesCtrl.create);
router.get("/:id", countriesCtrl.getById);
router.put("/", countriesCtrl.update);
router.post("/:id", countriesCtrl.deletedbyId);

export default router;