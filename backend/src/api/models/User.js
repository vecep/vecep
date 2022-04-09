import mongoose from 'mongoose';
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
	role: {
		type: String,
		default: [roles.DEFAULT],
		required: true
	},
	picture: ImageSchema
});

const User = mongoose.model('User', UserSchema);

export default User;
