import dotenv from 'dotenv';
dotenv.config();

// Import Pool from pg module
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
	host: process.env.PG_HOST,
	user: process.env.PG_USER,
	password: process.env.PG_PASSWORD,
	database: process.env.PG_DATABASE,
	port: process.env.PG_PORT,
})

export const closeDB = async () => {
	await pool.end();
}

export const queryListStudents = async () => {
	try {
		const results = await pool.query(
			`SELECT * FROM student 
			JOIN country ON student.country_id = country.country_id 
			ORDER BY student_id ASC;`
		);
		return results.rows;

	} catch (error) {
		throw error;
	}
}

export const queryCreateStudent = (data) => {
	
}

export const queryGetStudent = (id) => {
	
}

export const queryUpdateStudent = (id, data) => {
	
}

export const queryDeleteStudent = (id) => {
	
}
