import express from "express";
import { connectToDatabase } from "./database/connection.js";

const app = express();

app.listen(4000, async () => {
    connectToDatabase();
    console.log(`Server run on port: 4000`);
});