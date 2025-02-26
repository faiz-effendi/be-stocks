import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("user_if_e", "root", "", {
  host: "34.70.179.84",
  dialect: "mysql",
});

export default db;
