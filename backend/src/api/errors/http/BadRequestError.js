import { httpResponseCodes } from '../../utils/index.js';
import { UserFacingError } from '../base.js';

class BadRequestError extends UserFacingError {
	constructor(message = 'Bad request') {
		super({
			message,
			statusCode: httpResponseCodes.BAD_REQUEST
		});
	}
}

export default BadRequestError;
