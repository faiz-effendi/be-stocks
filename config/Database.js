import { Sequelize } from "sequelize";
import dotenv from "dotenv"; //untuk menyembunyikan data berharga

dotenv.config(); //ngekonfigurasi data dari file.env

//Bikin variabel yg nerima data yg dirahasiakan
const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;

console.log(DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST);

// Nyambungin db ke BE
const db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

export default db;