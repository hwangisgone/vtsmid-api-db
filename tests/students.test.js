import supertest from 'supertest';
import server from '../app';
import { closeDB } from '../src/models/students.models.js';

const requestWithSupertest = supertest(server); // We will use this function to mock HTTP requests

describe('GET "/student"', () => {
	test('returns all students', async () => {
		const res = await requestWithSupertest.get('/api/student');
		expect(res.status).toEqual(200);
		expect(res.type).toEqual(expect.stringContaining('json'));
		expect(Array.isArray(res.body)).toBe(true);
		// expect(res.body).toEqual()
	})
})

describe('POST "/student"', () => {
	test('creates a new student', async () => {
		const testStudent = {
			"email": "muoivan@gmail.com", 
			"phone": "0987654321", 
			"last_name": "Nguyen", 
			"middle_name": "Van", 
			"first_name": "Muoi", 
			"birth_year": 2003, 
			"sex": 1, 
			"school": "HUST", 
			"country_id": 1,
		};

		const res = await requestWithSupertest
			.post('/api/student')
			.send(testStudent);
			
		expect(res.status).toEqual(200);
		expect(res.type).toEqual(expect.stringContaining('json'));
		expect(res.body).toEqual(expect.objectContaining(testStudent));	// May return student_id
	})
})

describe('PUT "/student"', () => {
	test('updates a student', async () => {
		const testStudent = {
			"wrong_email": "wrong@gmail.com",
			"wrong_phone": "0987654321",
			"last_name": "Dang", 
			"birth_year": 2000, 
			"gender": 2,
			"school": "HUST - SOICT", 
			"country": 1,
		};
		// 4 incorrect fields
		// 3 correct fields
		// 6 missing fields

		const res = await requestWithSupertest
			.put('/api/student/15')
			.send(testStudent);
			
		expect(res.status).toEqual(200);
		expect(res.type).toEqual(expect.stringContaining('json'));
		expect(res.body).toEqual(expect.objectContaining({
			"last_name": "Dang", 
			"birth_year": 2000, 
			"school": "HUST - SOICT", 
		}));
	})
})

afterAll(done => {
	// Closing the DB connection allows Jest to exit successfully.
	closeDB();
	done();
})