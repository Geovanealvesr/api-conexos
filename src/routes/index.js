import express from "express";
import OrdensController from "../controllers/OrdensController.js";
import FuncionariosController from "../controllers/FuncionariosContoller.js";

const router = express.Router();

// Routes for "Ordens" model
router.post("/ordens", OrdensController.create);
router.get("/ordens", OrdensController.getAll);
router.get("/ordens/:id", OrdensController.getById);
router.put("/ordens/:id", OrdensController.update);
router.delete("/ordens/:id", OrdensController.delete);

// Routes for "Funcionarios" model
router.post("/funcionarios", FuncionariosController.create);
router.get("/funcionarios", FuncionariosController.getAll);
router.get("/funcionarios/:id", FuncionariosController.getById);
router.put("/funcionarios/:id", FuncionariosController.update);
router.delete("/funcionarios/:id", FuncionariosController.delete);

export default router;
