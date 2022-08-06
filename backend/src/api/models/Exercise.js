import mongoose from 'mongoose';
import OptionSchema from '../schemas/exercise/Option.js';
import ReferenceSchema from '../schemas/exercise/Reference.js';

const CORRECT_OPTIONS_AMOUNT = 1;

const validateOptions = (value) => {
	const invalidLength = value?.length != process.env.BUSINESS_OPTIONS_AMOUNT;
	const correctCount = value?.filter((v) => v?.isCorrect).length;
	const invalidCorrectCount = correctCount != CORRECT_OPTIONS_AMOUNT;

	if (invalidLength)
		throw new Error(
			`The amount of options must be ${process.env.BUSINESS_OPTIONS_AMOUNT}. Provided: ${value.length}`
		);
	if (invalidCorrectCount)
		throw new Error(
			`The amount of correct options must be ${CORRECT_OPTIONS_AMOUNT}. Provided: ${correctCount}`
		);
};

const ExerciseSchema = new mongoose.Schema({
	exam: {
		year: {
			type: Number,
			required: [true, 'Year is a required field']
		},
		stage: {
			type: Number,
			required: [true, 'Stage is a required field']
		}
	},
	question: {
		type: String,
		required: [true, 'Question is a required field']
	},
	subject: {
		type: String,
		required: [true, 'Subject is a required field']
	},
	topics: {
		type: [{ type: String, required: [true, ({ path }) => `Invalid topic item at: ${path}`] }],
		default: [],
		required: [true, 'Topics is a required field']
	},
	options: {
		type: [
			{ type: OptionSchema, required: [true, ({ path }) => `Invalid option item at: ${path}`] }
		],
		required: [true, 'Options is a required field'],
		validate: validateOptions
	},
	references: [ReferenceSchema]
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

export default Exercise;
