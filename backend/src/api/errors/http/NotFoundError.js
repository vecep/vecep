import { httpResponseCodes } from '../../utils/index.js';
import { UserFacingError } from '../base.js';

class NotFoundError extends UserFacingError {
	constructor(message = 'Resource not found') {
		super({
			message,
			statusCode: httpResponseCodes.NOT_FOUND
		});
	}
}

export default NotFoundError;
