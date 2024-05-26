import pg from 'pg';
const { Client } = pg;

import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const pgclient = new Client({
	host: process.env.POSTGRES_HOST,
	port: process.env.POSTGRES_PORT,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
});

await pgclient.connect();

let testQuery = '';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const testQueryFilepath = path.join(__dirname, 'postgres-test.sql');;

try {
  testQuery = fs.readFileSync(testQueryFilepath, 'utf8');
	await pgclient.query(testQuery);
} catch (err) {
  throw err;
}

await pgclient.end();