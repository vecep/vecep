import { httpResponseCodes } from '../../utils/index.js';
import { UserFacingError } from '../base.js';

class ForbiddenError extends UserFacingError {
	constructor(message = 'Forbidden') {
		super({
			message,
			statusCode: httpResponseCodes.FORBIDDEN
		});
	}
}

export default ForbiddenError;
