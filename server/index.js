import dotenv from "dotenv";
dotenv.config();
import connectToDataBase from "./db.js";
import express from "express";
import cors from "cors";
import { productRoutes } from "./routes/productRoutes.js";
import path from "path";

connectToDataBase();
const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("api is running...");
});

app.listen(port, () => {
  console.log(`Server Runs on port:${port}`);
});
