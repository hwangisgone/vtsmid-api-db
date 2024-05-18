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

afterAll(done => {
	// Closing the DB connection allows Jest to exit successfully.
	closeDB();
	done();
})