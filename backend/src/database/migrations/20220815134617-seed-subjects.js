import exercises from './seeds/exercises.js';

export const up = async (db) => {
	const uniqueSubjects = [...new Set(exercises.map((e) => e.subject))];
	const subjectsToInsert = uniqueSubjects.map((title) => ({
		title,
		active: true
	}));

	await db.collection('subjects').insertMany(subjectsToInsert);
};

export const down = async (db) => {
	await db.collection('subjects').deleteMany();
};
