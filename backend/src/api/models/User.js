import mongoose from 'mongoose';
import { requiredArray } from '../utils/index.js';
import ImageSchema from '../schemas/Image.js';

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: false
	},
	password: {
		type: String,
		required: true
	},
	roles: {
		type: [String],
		validate: requiredArray
	},
	picture: ImageSchema
});

const User = mongoose.model('User', UserSchema);

export default User;
