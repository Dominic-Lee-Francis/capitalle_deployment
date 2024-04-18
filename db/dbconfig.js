require("dotenv").config();

const Pool = require("pg").Pool;

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
};

// need to alter the pool based on the environment we are in
const pool = new Pool(devConfig);

module.exports = pool;
