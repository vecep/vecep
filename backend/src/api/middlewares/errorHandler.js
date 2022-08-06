import { UserFacingError } from '../errors/base.js';
import { httpResponseCodes, responseFactory } from '../utils/index.js';
import 'dotenv/config.js';
import mongoose from 'mongoose';

export default (err, req, res, next) => {
	if (err instanceof mongoose.Error) {
		const errorMessages = Object.keys(err.errors).reduce((reduced, key) => {
			reduced[key] = err.errors[key].message;
			return reduced;
		}, {});

		responseFactory(res, {
			message: errorMessages,
			status: httpResponseCodes.INTERNAL_SERVER_ERROR
		}).send();
	}
	if (err instanceof UserFacingError)
		responseFactory(res, {
			status: err.statusCode,
			message: err.message
		}).send();

	responseFactory(res, {
		status: httpResponseCodes.INTERNAL_SERVER_ERROR,
		message: 'Internal Server Error',
		content: process.env.NODE_ENV === 'dev' ? err.stack : undefined
	}).send();
};
