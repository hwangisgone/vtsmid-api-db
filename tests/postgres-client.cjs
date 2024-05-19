const { Client } = require('pg');
const fs = require('node:fs');
const path = require('node:path');

const pgclient = new Client({
	host: process.env.POSTGRES_HOST,
	port: process.env.POSTGRES_PORT,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DATABASE,
});

await pgclient.connect();

let testQuery = '';
const testQueryFilepath = path.join(__dirname, 'postgres-test.sql');;

try {
  testQuery = fs.readFileSync(testQueryFilepath, 'utf8');
} catch (err) {
  throw err;
}

try {
	await pgclient.query(testQuery);
} catch (err) {
	throw err;
}

await pgclient.end();