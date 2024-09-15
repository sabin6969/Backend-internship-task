import express from "express";
import itemRouter from "../routes/itemRoutes.js";


const app = express();

// app level middlewares
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/item",itemRouter);

export default app;