import mongoose from 'mongoose';

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

export default ImageSchema;
