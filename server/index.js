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
const __dirname = path.resolve();

if (process.env.NODE_ENV == "production") {
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("api is running...");
});

app.listen(port, () => {
  console.log(`Server Runs on port:${port}`);
});
