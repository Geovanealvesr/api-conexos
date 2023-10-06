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
        return res.status(400).json({ error: "Código de acesso não cadastrado!" });
      }

      const senhaValida = bcrypt.compareSync(senha, usuario.senha);

      if (!senhaValida) {
        return res.status(401).json({ error: "Código de acesso ou senha inválidos!" });
      }

      const token = jwt.sign(
        {
          id: usuario.id,
          codigo: usuario.codigo,
          nome: usuario.nome,
        },
        key 
        ,
        { expiresIn: '1h' } // Define um tempo de expiração para o token (por exemplo, 1 hora)
      );

      return res.json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Ocorreu um erro durante a autenticação." });
    }
  },
};

export default AuthController;
