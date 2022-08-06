import request from 'supertest';
import app from '../app.js';
import { userOne, setupDatabase } from '../__fixtures__/db.js';

beforeEach(setupDatabase);

test('fetches answers for authenticated users', async () => {
	await request(app).get('/api/answers').set('x-access-token', userOne.token).send().expect(200);
});

test('does NOT fetch answers for unauthenticated users', async () => {
	const res = await request(app).get('/api/answers').send().expect(403);

	expect(res.body.message).toBe('No token found');
});

test('does NOT fetch answers if token is invalid', async () => {
	await request(app).get('/api/answers').set('x-access-token', 'invalidtoken').expect(401);
});
