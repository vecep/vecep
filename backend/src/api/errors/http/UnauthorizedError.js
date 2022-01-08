import { httpResponseCodes } from '../../utils/index.js';
import { UserFacingError } from '../base.js';

class UnauthorizedError extends UserFacingError {
	constructor(message = 'Unauthorized') {
		super({
			message,
			statusCode: httpResponseCodes.UNAUTHORIZED
		});
	}
}

export default UnauthorizedError;
