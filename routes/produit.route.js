import express from "express";
import produitController from "../controllers/produitController.js";

const router = express.Router();

router.post("/", produitController.create);
router.post("/many", produitController.createMany);
router.get("/", produitController.getAll);
router.get("/:id", produitController.getById);
router.put("/:id", produitController.update);
router.delete("/:id", produitController.delete);
router.delete("/", produitController.deleteMany);

export default router;