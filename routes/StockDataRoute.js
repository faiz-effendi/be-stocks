import express from "express";
import { getStocks } from "../controllers/StockDataController.js";

const router = express.Router();

router.get("/stocks", getStocks);

export default router;
