import request from 'supertest';
import app from '../app.js';
import { userOne, setupRole, setupDatabase } from '../__fixtures__/db.js';
import { exercise, optionFactory } from '../__mocks__/exercise.js';

beforeEach(setupDatabase);

describe('Unhappy path', () => {
	describe('Options CRUD', () => {
		test('does NOT create an exercise with EMPTY options array', async () => {
			const invalidExercise = {
				...exercise,
				options: []
			};

			await setupRole('Admin');
			const res = await request(app)
				.post('/api/exercise')
				.set('x-access-token', userOne.token)
				.send(invalidExercise);

			expect(res.body.status).toBe(500);
			expect(res.body.message.options).toBe('The amount of options must be 5. Provided: 0');
		});

		test('does NOT create an exercise with more than 5 options', async () => {
			const invalidExercise = {
				...exercise,
				options: [...exercise.options, optionFactory()]
			};

			await setupRole('Admin');
			const res = await request(app)
				.post('/api/exercise')
				.set('x-access-token', userOne.token)
				.send(invalidExercise);

			expect(res.body.status).toBe(500);
			expect(res.body.message.options).toBe('The amount of options must be 5. Provided: 6');
		});

		test('does NOT create an exercise with less than 5 options', async () => {
			const invalidExercise = {
				...exercise,
				options: exercise.options.slice(0, exercise.options.length - 1)
			};

			await setupRole('Admin');
			const res = await request(app)
				.post('/api/exercise')
				.set('x-access-token', userOne.token)
				.send(invalidExercise);

			expect(res.body.status).toBe(500);
			expect(res.body.message.options).toBe('The amount of options must be 5. Provided: 4');
		});

		test('does NOT create an exercise with two CORRECT options', async () => {
			const invalidExercise = {
				...exercise,
				options: [
					optionFactory({ isCorrect: true }),
					optionFactory({ isCorrect: true }),
					optionFactory(),
					optionFactory(),
					optionFactory()
				]
			};

			await setupRole('Admin');
			const res = await request(app)
				.post('/api/exercise')
				.set('x-access-token', userOne.token)
				.send(invalidExercise);

			expect(res.body.status).toBe(500);
			expect(res.body.message.options).toBe('The amount of correct options must be 1. Provided: 2');
		});

		test('does NOT create an exercise with EMPTY options field', async () => {
			const invalidExercise = {
				...exercise,
				options: null
			};

			await setupRole('Admin');
			const res = await request(app)
				.post('/api/exercise')
				.set('x-access-token', userOne.token)
				.send(invalidExercise);

			expect(res.body.status).toBe(500);
			expect(res.body.message['options']).toBe('Options is a required field');
		});

		test('does NOT create an exercise with invalid options value', async () => {
			const invalidExercise = {
				...exercise,
				options: 2
			};

			await setupRole('Admin');
			const res = await request(app)
				.post('/api/exercise')
				.set('x-access-token', userOne.token)
				.send(invalidExercise);

			expect(res.body.status).toBe(500);
			expect(res.body.message['options']).toBe(
				'Cast to embedded failed for value "2" (type string) at path "options"'
			);
		});

		test('does NOT create an exercise with invalid options items', async () => {
			const invalidExercise = {
				...exercise,
				options: [optionFactory({ isCorrect: true }), null, null, null, null]
			};

			await setupRole('Admin');
			const res = await request(app)
				.post('/api/exercise')
				.set('x-access-token', userOne.token)
				.send(invalidExercise);

			expect(res.body.status).toBe(500);
			expect(res.body.message['options.1']).toBe('Invalid option item at: options.1');
			expect(res.body.message['options.2']).toBe('Invalid option item at: options.2');
			expect(res.body.message['options.3']).toBe('Invalid option item at: options.3');
			expect(res.body.message['options.4']).toBe('Invalid option item at: options.4');
		});
	});

	describe('Topics CRUD', () => {
		test('does NOT create an exercise with EMPTY topics field', async () => {
			const invalidExercise = {
				...exercise,
				topics: null
			};

			await setupRole('Admin');
			const res = await request(app)
				.post('/api/exercise')
				.set('x-access-token', userOne.token)
				.send(invalidExercise);

			expect(res.body.status).toBe(500);
			expect(res.body.message['topics']).toBe('Topics is a required field');
		});

		test('does NOT create an exercise with invalid topics value', async () => {
			const invalidExercise = {
				...exercise,
				topics: { a: 2 }
			};

			await setupRole('Admin');
			const res = await request(app)
				.post('/api/exercise')
				.set('x-access-token', userOne.token)
				.send(invalidExercise);

			expect(res.body.status).toBe(500);
			expect(res.body.message['topics.0']).toBe(
				'Cast to [string] failed for value "[ { a: 2 } ]" (type string) at path "topics.0"'
			);
		});

		test('does NOT create an exercise with invalid topics items', async () => {
			const invalidExercise = {
				...exercise,
				topics: [null]
			};

			await setupRole('Admin');
			const res = await request(app)
				.post('/api/exercise')
				.set('x-access-token', userOne.token)
				.send(invalidExercise);

			expect(res.body.status).toBe(500);
			expect(res.body.message['topics.0']).toBe('Invalid topic item at: topics.0');
		});
	});
});
