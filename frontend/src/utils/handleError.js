import { message } from 'utils';

const handleError = (err) => {
	console.error(err);
	message.error(err.message);
};

export default handleError;
