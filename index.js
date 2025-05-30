import express from "express";
import cors from "cors";
import CoinDataRoute from './routes/CoinDataRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(CoinDataRoute);

app.listen(5000, () => console.log("Server connected"));
