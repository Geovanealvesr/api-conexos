import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Ordens = db.define("Ordens", {
	id: {
		type: Sequelize.INTEGER.UNSIGNED,
		primaryKey: true, 
		autoIncrement: true,
	},
	nome: {
		type: Sequelize.STRING(200),
		allowNull: false,
	},
	cpf: {
		type: Sequelize.STRING(160),
		allowNull: false,
	},
	telefone: {
		type: Sequelize.STRING(160),
		allowNull: false,
	},
	email: {
		type: Sequelize.STRING(160),
		allowNull: false,
	},
	plano: {
		type: Sequelize.STRING(160),
		allowNull: false,
	},
	horario: {
		type: Sequelize.STRING(160),
		allowNull: false,
	},
	status: {
		type: Sequelize.STRING(100),
		allowNull: true,
	},
});

export default Ordens;
