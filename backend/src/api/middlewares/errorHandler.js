import { UserFacingError } from '../errors/base.js';
import { httpResponseCodes } from '../utils/index.js';
import 'dotenv/config.js';

export default (err, req, res, next) => {
	let response = {};

	if (err instanceof UserFacingError) {
		response.statusCode = err.statusCode;
		response.message = err.message;
	} else {
		response.statusCode = httpResponseCodes.INTERNAL_SERVER_ERROR;
		response.message = 'Internal Server Error';

		if (process.env.NODE_ENV === 'dev') {
			response.content = err.stack;
		}
	}

	res.status(response.statusCode).json(response);
};
