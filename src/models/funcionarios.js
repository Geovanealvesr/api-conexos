import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Funcionarios = db.define("Funcionarios", {
	id: {
		type: Sequelize.INTEGER.UNSIGNED,
		primaryKey: true, 
		autoIncrement: true,
	},
	nome: {
		type: Sequelize.STRING(200),
		allowNull: false,
	},
	codigo: {
		type: Sequelize.STRING(200),
		allowNull: false,
	},
	senha: {
		type: Sequelize.STRING(200),
		allowNull: false,
	},
	
});

export default Funcionarios;
