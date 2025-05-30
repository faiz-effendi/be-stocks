import express from "express";
import { getCoins } from "../controllers/CoinDataController.js";

const router = express.Router();

router.get("/coins", getCoins);

export default router;
