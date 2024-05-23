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



import { NotFoundError } from '../errors/NotFoundError.js';

export const queryListStudents = async () => {
	try {
		const results = await pool.query(
			`SELECT student.*, country.name AS country_name FROM student 
			JOIN country ON student.country_id = country.country_id 
			ORDER BY student_id ASC;`
		);
		return results.rows;

	} catch (error) {
		throw error;
	}
}

export const queryCreateStudent = async (data) => {
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

export const queryGetStudent = async (id) => {
	try {
		const results = await pool.query(
			`SELECT student.*, country.name AS country_name FROM student 
			JOIN country ON student.country_id = country.country_id
			WHERE student_id=$1;`, [id]);

		return results.rows[0];

	} catch (error) {
		throw error;
	}
}

const updateableFields = ["email", "phone", "first_name", "middle_name", "last_name", "birth_year", "sex", "school", "country_id"];
export const queryUpdateStudent = async (id, data) => {
	try {
		let index = 1;
		const filteredEntries = Object.entries(data)
			.filter(([key, value]) => updateableFields.includes(key));

		if (filteredEntries.length == 0) {
			// No new entries
			// console.log("No update");
			return await queryGetStudent(id);
		}

		const dynamicSet = filteredEntries.map(([key, value]) => {
			const paramStr = `${key}=\$${index}`;
			index += 1;
			return paramStr;
		}).join(', ');

		const dynamicQuery = `UPDATE student SET ` + dynamicSet + ` WHERE student_id=\$${index} RETURNING *;`;
		const dynamicParams = filteredEntries.map(([key, value]) => value);
		dynamicParams.push(id);

		// console.log(dynamicQuery);
		// console.log(dynamicParams);

		const results = await pool.query(dynamicQuery, dynamicParams);
		
		if (results.rows.length == 1) {
			return results.rows[0];
		} else {
			throw new NotFoundError('Student not found');
		}

	} catch (error) {
		throw error;
	}
}


export const queryDeleteStudent = async (id) => {
	try {
		const results = await pool.query(`DELETE FROM student WHERE student_id=$1 RETURNING *;`, [id]);
		
		if (results.rows.length == 1) {
			return results.rows[0];
		} else {
			throw new NotFoundError('Student not found');
		}

	} catch (error) {
		throw error;
	}
}
