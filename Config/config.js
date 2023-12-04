import "dotenv/config";

const environment = {
  SERVER_PORT: process.env.SERVER_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_DIALECT: process.env.DB_DIALECT,
  DB_PORT: process.env.DB_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_HOST:process.env.DB_HOST
};

export { environment };
