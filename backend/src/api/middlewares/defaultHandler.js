import { messages } from '../utils/index.js';

export default (req, res) => {
	res.json({
		status: res.statusCode,
		message: res.message || messages.responseSuccess,
		content: res.content
	});
};
