import Funcionarios from "../models/funcionarios.js"; 
import bcrypt from "bcryptjs";


class FuncionariosController {
  async create(req, res) {
    console.log(req.user);
    try {
      const { nome, codigo, senha } = req.body;
      const newSenha = bcrypt.hashSync(senha, 10);

      const funcionario = await Funcionarios.create({
        nome: nome,
        codigo: codigo,
        senha: newSenha,
      });

      res.status(201).json(funcionario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const funcionarios = await Funcionarios.findAll();
      res.json(funcionarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const funcionario = await Funcionarios.findByPk(req.params.id);

      if (!funcionario) {
        return res.status(404).json({ error: "Funcionário não encontrado" });
      }

      res.json(funcionario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { nome, codigo, senha } = req.body;

      const [affectedRows] = await Funcionarios.update(
        {
          nome: nome,
          codigo: codigo,
          senha: senha,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      if (!affectedRows || affectedRows == 0) {
        return res.status(500).json({
          error: `Não foi possível atualizar o funcionário com id: ${req.params.id}`,
        });
      }

      res.json({ message: "Funcionário atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const destroyedRows = await Funcionarios.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (destroyedRows === 0) {
        return res.status(500).json({
          error: `Não foi possível excluir o funcionário com id: ${req.params.id}`,
        });
      }

      res.json({ message: "Funcionário excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async 

}

export default new FuncionariosController();
