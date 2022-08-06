export default (res, { status, message, content }) => {
	const send = () => {
		res.status(status).json({ status, message, content });
	};

	return {
		status,
		message,
		content,
		send
	};
};
