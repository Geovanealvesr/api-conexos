import Funcionarios from "../models/funcionarios.js"; 
import bcrypt from "bcryptjs";

const AuthController = {

    async login(req, res){
        const { codigo, senha } = req.body;

        try {
            const usuario = await Funcionarios.findOne({
                where: {
                    codigo,
                }
            });

            if (!usuario) {
                return res.status(400).json("Código de acesso não cadastrado!");
            }

            if (!bcrypt.compareSync(senha, usuario.senha)) {
                return res.status(401).json("Código de acesso ou senha inválidos!");
            }

            return res.json({ message: "Logado!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Ocorreu um erro durante a autenticação." });
        }
    }
};

export default AuthController;
