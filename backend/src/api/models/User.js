import mongoose from 'mongoose';
import { requiredArray } from '../utils/index.js';
import ImageSchema from '../schemas/Image.js';
import roles from '../utils/roles.js';

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	email: String,
	password: {
		type: String,
		required: true
	},
	roles: {
		type: [String],
		default: [roles.DEFAULT],
		validate: requiredArray
	},
	picture: ImageSchema
});

const User = mongoose.model('User', UserSchema);

export default User;
