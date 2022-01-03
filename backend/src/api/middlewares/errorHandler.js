import { UserFacingError } from '../errors/base.js';
import { httpResponseCodes } from '../utils/index.js';

export default (err, req, res) => {
	let response = {};

	if (err instanceof UserFacingError) {
		response.statusCode = err.statusCode;
		response.message = err.message;
	} else {
		response.statusCode = httpResponseCodes.INTERNAL_SERVER_ERROR;
		response.message = 'Internal Server Error';
	}

	res.status(response.statusCode).json(response);
};
