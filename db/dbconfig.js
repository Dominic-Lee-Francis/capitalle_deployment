const Pool = require("pg").Pool;
require("dotenv").config();

const devConfigURL = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}/${process.env.PG_DATABASE}`;

// need to alter the pool based on the environment we are in
const pool = new Pool({
  connectionString: devConfigURL,
});

module.exports = pool;
