import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
	dialect: "mysql",
	host: dbHost,
});

async function hasConnection(){
    try{
        await sequelize.authenticate();
        console.log("DB connect")
    }catch(error){
        console.log("Falha ao acessar o DB");
    }
}
Object.assign(sequelize, {hasConnection});

export default sequelize;