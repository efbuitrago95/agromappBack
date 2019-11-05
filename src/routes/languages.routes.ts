import express from "express";
import LanguageController from "../controllers/languageController.controller";

const languageCtrl: LanguageController = new LanguageController();
const router = express.Router();

router.get("/", languageCtrl.getAll);
router.post("/", languageCtrl.create);
router.get("/:id", languageCtrl.getById);
router.put("/", languageCtrl.update);
router.post("/:id", languageCtrl.deletedbyId);

export default router;