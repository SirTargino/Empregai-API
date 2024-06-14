import dotenv from "dotenv";
import { createConnection } from "mysql";

dotenv.config();

export const db = createConnection({
    host: 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
})