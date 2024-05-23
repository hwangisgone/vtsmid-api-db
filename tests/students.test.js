import supertest from 'supertest';
import server from '../app';
import { closeDB } from '../src/models/students.models.js';


// Test start
const requestWithSupertest = supertest(server); // We will use this function to mock HTTP requests
const testStudentId = 15;
let createdStudentId = 0;

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

		createdStudentId = res.body.student_id;
	})
})

describe('GET "/student/:id"', () => {
	test('gets a student', async () => {
		const allFields = [
			"student_id", "email", "phone", 
			"first_name", "middle_name", "last_name", 
			"birth_year", "sex", "school", 
			"country_id", "country_name"
		];

		const res = await requestWithSupertest
			.get('/api/student/' + testStudentId);

		expect(res.status).toEqual(200);
		expect(res.type).toEqual(expect.stringContaining('json'));

		allFields.forEach(key => expect(res.body).toHaveProperty(key));
	})
})

describe('PUT "/student/:id"', () => {
	test('updates a student', async () => {
		const testUpdate = {
			"last_name": "Dang", 
			"birth_year": 2000, 
			"school": "HUST - SOICT", 
		};
		// 3 correct fields
		// 6 missing fields

		const res = await requestWithSupertest
			.put('/api/student/' + testStudentId)
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
			.put('/api/student/' + testStudentId)
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
			.put('/api/student/' + testStudentId)
			.send(Object.assign({}, testWrongUpdate, testCorrectUpdate));
			
		expect(res.status).toEqual(200);
		expect(res.type).toEqual(expect.stringContaining('json'));

		expect(res.body).not.toEqual(expect.objectContaining(testWrongUpdate));
		expect(res.body).toEqual(expect.objectContaining(testCorrectUpdate));
	})
})

describe('DELETE "/student/:id"', () => {
	test('deletes a student', async () => {
		const res = await requestWithSupertest
			.delete('/api/student/' + createdStudentId);

		expect(res.status).toEqual(200);
		expect(res.type).toEqual(expect.stringContaining('json'));

		// Confirm that it's deleted
		const confirmRes = await requestWithSupertest
			.get('/api/student/' + createdStudentId);

		expect(confirmRes.status).toEqual(404);
	})
})

afterAll(done => {
	// Closing the DB connection allows Jest to exit successfully.
	closeDB();
	done();
})