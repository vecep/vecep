import mongoose from 'mongoose';
import ImageSchema from '../Image';

const OptionSchema = new mongoose.Schema({
	text: String,
	isCorrect: {
		type: Boolean,
		required: true
	},
	image: ImageSchema
});

export default OptionSchema;
