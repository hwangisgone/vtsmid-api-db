import dotenv from 'dotenv';
dotenv.config();

// Import Pool from pg module
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
	host: process.env.POSTGRES_HOST,
	port: process.env.POSTGRES_PORT,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DATABASE,
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
	try {
		const results = await pool.query(
			`INSERT INTO student(email, phone, first_name, middle_name, last_name, birth_year, sex, school, country_id) 
			VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`,
			[data.email, data.phone, data.first_name, data.middle_name, data.last_name, data.birth_year, data.sex, data.school, data.country_id]
		);
		return results.rows[0];

	} catch (error) {
		throw error;
	}
}

export const queryGetStudent = (id) => {
	
}

export const queryUpdateStudent = (id, data) => {
	
}

export const queryDeleteStudent = (id) => {
	
}
