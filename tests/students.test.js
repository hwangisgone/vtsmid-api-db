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
		const testUpdate = {
			"last_name": "Dang", 
			"birth_year": 2000, 
			"school": "HUST - SOICT", 
		};
		// 3 correct fields
		// 6 missing fields

		const res = await requestWithSupertest
			.put('/api/student/15')
			.send(testUpdate);
			
		expect(res.status).toEqual(200);
		expect(res.type).toEqual(expect.stringContaining('json'));
		expect(res.body).toEqual(expect.objectContaining(testUpdate));
	})

	test('does not update student (no correct fields)', async () => {
		const testWrongUpdate = {
			"wrong_email": "wrong@gmail.com",
			"wrong_phone": "0987654321",
			"gender": 2,
			"country": 1,
		};
		// 4 incorrect fields

		// TODO: get request to validate

		const res = await requestWithSupertest
			.put('/api/student/15')
			.send(testWrongUpdate);
			
		expect(res.status).toEqual(200);
		expect(res.type).toEqual(expect.stringContaining('json'));
		expect(res.body).not.toEqual(expect.objectContaining(testWrongUpdate));
	})

	test('updates 1 field for a student (1 correct fields)', async () => {
		const testWrongUpdate = {
			"wrong_email": "wrong@gmail.com",
			"gender": 2,
			"country_origin": 1,
		};
		const testCorrectUpdate = {
			"phone": "0987654321",
		}
		// 3 incorrect fields
		// 1 correct field

		// TODO: get request to validate

		const res = await requestWithSupertest
			.put('/api/student/15')
			.send(Object.assign({}, testWrongUpdate, testCorrectUpdate));
			
		expect(res.status).toEqual(200);
		expect(res.type).toEqual(expect.stringContaining('json'));

		expect(res.body).not.toEqual(expect.objectContaining(testWrongUpdate));
		expect(res.body).toEqual(expect.objectContaining(testCorrectUpdate));
	})
})

afterAll(done => {
	// Closing the DB connection allows Jest to exit successfully.
	closeDB();
	done();
})