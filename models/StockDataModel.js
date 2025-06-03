import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// Membuat tabel "user"
const StockModel = db.define(
  "stocks", // Nama Tabel
  {
    image_url: Sequelize.TEXT,
    code: Sequelize.STRING(9),
    name: Sequelize.STRING(255),
    price: Sequelize.INTEGER,
    marketcap: Sequelize.BIGINT,
    dividend: Sequelize.DOUBLE
  }, {
    freezeTableName: true,
    timestamps: false,
  }
);

db.sync().then(() => console.log("Database synced"));

export default StockModel;
