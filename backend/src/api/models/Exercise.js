import mongoose from 'mongoose';
import { requiredArray } from '../utils/index.js';
import ImageSchema from '../schemas/Image.js';

const ExerciseSchema = new mongoose.Schema({
	exam: {
		year: {
			type: Number,
			required: true
		},
		stage: {
			type: Number,
			required: true
		}
	},
	question: {
		type: String,
		required: true
	},
	subject: {
		type: String,
		required: true
	},
	topics: {
		type: [String],
		validate: requiredArray
	},
	options: {
		type: [
			{
				text: String,
				isCorrect: {
					type: Boolean,
					required: true
				},
				image: ImageSchema
			}
		],
		validate: requiredArray
	},
	references: [
		{
			text: String,
			author: String,
			source: String,
			image: ImageSchema
		}
	]
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

export default Exercise;
