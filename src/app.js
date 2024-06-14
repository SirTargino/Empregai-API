import express from "express";
import { db } from "./database/connection.js";
import { jobRouter } from "./routes/job.routes.js";

const app = express();

app.use(express.json());
app.use(jobRouter);

app.listen(4000, async () => {
    try {
        db.connect();
        console.log(`Server run on port: 4000`);
    } catch (error) {
        console.error(error);
    }
});