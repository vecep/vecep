import mongoose from 'mongoose';
import { requiredArray } from '../utils/index.js';

const ImageSchema = new mongoose.Schema({
	description: {
		type: String,
		required: true
	},
	cloudId: {
		type: String,
		required: true
	}
});

const OptionSchema = new mongoose.Schema({
	text: String,
	correctAnswer: {
		type: Boolean,
		required: true
	},
	image: ImageSchema
});

const ReferenceSchema = new mongoose.Schema({
	text: String,
	author: String,
	source: String,
	image: ImageSchema
});

const ExerciseSchema = new mongoose.Schema({
	year: {
		type: Number,
		required: true
	},
	stage: {
		type: Number,
		required: true
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
		type: [OptionSchema],
		validate: requiredArray
	},
	references: {
		type: [ReferenceSchema]
	}
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

export default Exercise;
