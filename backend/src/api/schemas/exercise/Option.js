import mongoose from 'mongoose';
import ImageSchema from '../Image.js';

const validatePosition = (value) => {
	const isInvalid = value < 1 || value > process.env.BUSINESS_OPTIONS_AMOUNT;

	if (isInvalid)
		throw new Error(
			`The position must be a number from 1 to ${process.env.BUSINESS_OPTIONS_AMOUNT}. Provided: ${value}`
		);
};

const OptionSchema = new mongoose.Schema({
	position: {
		type: Number,
		validate: validatePosition,
		required: [true, 'Position is a required field']
	},
	text: String,
	isCorrect: {
		type: Boolean,
		required: true
	},
	image: ImageSchema
});

export default OptionSchema;
