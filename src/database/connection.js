import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logging: false,
});

export const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Connection has been established successfully");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};