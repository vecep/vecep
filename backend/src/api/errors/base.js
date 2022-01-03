class ApplicationError extends Error {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;

		Error.captureStackTrace(this, this.constructor);
	}
}

class UserFacingError extends ApplicationError {
	constructor({ message, name, statusCode }) {
		super(message, name);
		this.statusCode = statusCode;
	}
}

export { ApplicationError, UserFacingError };
