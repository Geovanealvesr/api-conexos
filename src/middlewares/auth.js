import JWT from "jsonwebtoken";
import { key } from "../config/secret.js";

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Token não especificado" });
  }

  const partsToken = authorization.split(" ");

  if (partsToken.length !== 2 || partsToken[0] !== "Bearer") {
    return res.status(401).json({ message: "Token mal formatado" });
  }

  const token = partsToken[1];

  try {
    const data = JWT.verify(token, key);

    // Adicione os dados do usuário autenticado ao objeto de requisição para uso posterior
    req.AUTH = data;

    return next();
  } catch (e) {
    return res.status(401).json({ message: "Token inválido! Faça login novamente!" });
  }
};
