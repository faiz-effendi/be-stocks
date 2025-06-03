import express from "express";
import cors from "cors";
import StockDataRoute from './routes/StockDataRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(StockDataRoute);

app.listen(3001, () => console.log("Server connected"));
