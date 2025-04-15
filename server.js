import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./database/connect.js";
dotenv.config();
const app = express();

app.use(express.json());
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
