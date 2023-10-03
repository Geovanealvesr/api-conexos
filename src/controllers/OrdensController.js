import Ordens from "../models/ordens.js"; 
class OrdensController {
  async create(req, res) {
    try {
      const { nome, cpf, telefone, email, plano, horario } = req.body;

      const ordem = await Ordens.create({
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        email: email,
        plano: plano,
        horario: horario,
      });

      res.status(201).json(ordem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const ordens = await Ordens.findAll();
      res.json(ordens);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const ordem = await Ordens.findByPk(req.params.id);

      if (!ordem) {
        return res.status(404).json({ error: "Pedido não encontrada" });
      }

      res.json(ordem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { nome, cpf, telefone, email, plano, horario } = req.body;

      const [affectedRows] = await Ordens.update(
        {
          nome: nome,
          cpf: cpf,
          telefone: telefone,
          email: email,
          plano: plano,
          horario: horario,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      if (!affectedRows || affectedRows == 0) {
        return res.status(500).json({
          error: `Não foi possível atualizar o pedido com id: ${req.params.id}`,
        });
      }

      res.json({ message: "Pedido atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const destroyedRows = await Ordens.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (destroyedRows === 0) {
        return res.status(500).json({
          error: `Não foi possível excluir o pedido com id: ${req.params.id}`,
        });
      }

      res.json({ message: "Ordem excluída com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new OrdensController();
