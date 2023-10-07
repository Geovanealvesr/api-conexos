import Funcionarios from "../models/funcionarios.js";
import { key } from "../config/secret.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const AuthController = {
  async login(req, res) {
    const { codigo, senha } = req.body;

    try {
      const usuario = await Funcionarios.findOne({
        where: {
          codigo,
        },
      });

      if (!usuario) {
        return res.status(400).json({ error: "Código de acesso ou senha inválidos!" });
      }

      const senhaValida = bcrypt.compareSync(senha, usuario.senha);

      if (!senhaValida) {
        return res.status(401).json({ error: "Acesso não autorizado!" });
      }

      const token = jwt.sign(
        {
          id: usuario.id,
          codigo: usuario.codigo,
          nome: usuario.nome,
        },
        key 
        ,
        { expiresIn: '5h' } 
      );

      return res.json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Ocorreu um erro durante a autenticação." });
    }
  },
};

export default AuthController;
