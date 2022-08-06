import mongoose from 'mongoose';
import ImageSchema from '../Image';

const ReferenceSchema = new mongoose.Schema({
	text: String,
	author: String,
	source: String,
	image: ImageSchema
});

export default ReferenceSchema;
