import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// Membuat tabel "user"
const CoinModel = db.define(
  "coin_data", // Nama Tabel
  {
    name: Sequelize.STRING(255),
    short_name: Sequelize.STRING(6),
    image_url: Sequelize.TEXT,
    current_price: Sequelize.INTEGER
  }, {
    freezeTableName: true,
    timestamps: false,
  }
);

db.sync().then(() => console.log("Database synced"));

export default CoinModel;
