import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { faker } from '@faker-js/faker';
import User from '../api/models/User.js';

export const userOne = {
	_id: new mongoose.Types.ObjectId(),
	username: faker.name.findName(),
	password: faker.internet.password(),
	email: faker.internet.email(),
	get token() {
		return jwt.sign({ _id: this._id }, process.env.SECRET);
	}
};

export const setupDatabase = async () => {
	await User.deleteMany();
	await User.create(userOne);
};

export const setupRole = async (role) => {
	await User.findByIdAndUpdate(userOne._id, { role }, { new: true });
};
