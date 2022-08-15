import exercises from './seeds/exercises.js';

export const up = async (db) => {
	await db.collection('exercises').insertMany(exercises);
};

export const down = async (db) => {
	await db.collection('exercises').deleteMany();
};
