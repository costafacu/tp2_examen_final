import { Sequelize } from "sequelize";
import { environment } from "../Config/config.js";

const connection = new Sequelize(environment.DB_NAME, environment.DB_USERNAME, "", {
  host: environment.DB_HOST,
  dialect: environment.DB_DIALECT,
  port: environment.DB_PORT,
});

try {
  await connection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default connection;
