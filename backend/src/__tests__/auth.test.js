import request from 'supertest';
import app from '../app.js';
import { faker } from '@faker-js/faker';
import { userOne, setupDatabase } from '../__fixtures__/db.js';

beforeEach(setupDatabase);

describe('Happy path', () => {
	describe('Sign up', () => {
		test('signs up a new user', async () => {
			const user = {
				username: faker.name.findName(),
				password: faker.internet.password(),
				email: ''
			};

			const res = await request(app).post('/api/auth/signup').send(user).expect(200);

			expect(res.body.message).toBe('Your account has been successfully created');
			expect(res.body.content).toMatchObject({ username: user.username, email: '' });
			expect(res.body.content.password).toBeUndefined();
		});
	});

	describe('Sign in', () => {
		test('signs in existing user', async () => {
			const res = await request(app)
				.post('/api/auth/signin')
				.send({
					username: userOne.username,
					password: userOne.password
				})
				.expect(200);

			expect(res.body.message).toBe('Logged in successfully');
		});
	});
});

describe('Unhappy path', () => {
	describe('Sign up', () => {
		test('does NOT sign up a user with existing username', async () => {
			const user = {
				username: userOne.username,
				password: faker.internet.password(),
				email: ''
			};

			const res = await request(app).post('/api/auth/signup').send(user).expect(400);

			expect(res.body.message).toBe('Name already being used');
			expect(res.body.content).toBeUndefined();
		});

		test('does NOT sign up a user with existing email', async () => {
			const user = {
				username: faker.name.findName(),
				password: faker.internet.password(),
				email: userOne.email
			};

			const res = await request(app).post('/api/auth/signup').send(user).expect(400);

			expect(res.body.message).toBe('Email already being used');
			expect(res.body.content).toBeUndefined();
		});
	});

	describe('Sign in', () => {
		test.each([
			['on invalid username', faker.name.findName(), userOne.password],
			['on invalid password', userOne.username, faker.internet.password()],
			['nonexisting user', faker.name.findName(), faker.internet.password()]
		])('does NOT sign in %s', async (_, username, password) => {
			await request(app)
				.post('/api/auth/signin')
				.send({
					username,
					password
				})
				.expect(401);
		});
	});
});
