import express from "express";
import OrdensController from "../controllers/OrdensController.js";

const router = express.Router();

// Rota para criar uma novo pedido
router.post("/ordens", OrdensController.create);

// Rota para listar todos os pedidos
router.get("/ordens", OrdensController.getAll);

// Rota para obter um pedido por ID
router.get("/ordens/:id", OrdensController.getById);

// Rota para atualizar um pedido por ID
router.put("/ordens/:id", OrdensController.update);

// Rota para excluir uma ordem por ID
router.delete("/ordens/:id", OrdensController.delete);

export default router;
