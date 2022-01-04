import { messages } from '../utils/index.js';
import { NotFoundError } from '../errors/http/index.js';

export default (req, res) => {
	if (!res?.content) {
		throw new NotFoundError();
	}

	res.json({
		status: res.statusCode,
		message: res.message || messages.responseSuccess,
		content: res.content
	});
};
