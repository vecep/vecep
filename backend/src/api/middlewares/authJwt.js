import jwt from 'jsonwebtoken';
import userService from '../services/user.js';
import { ForbiddenError, UnauthorizedError } from '../errors/http/index.js';
import 'dotenv/config.js';
import roles from '../utils/roles.js';

const verifyToken = (req, res, next) => {
	let token = req.headers['x-access-token'];

	if (!token) {
		throw new ForbiddenError('No token found');
	}

	jwt.verify(token, process.env.SECRET, (err, decoded) => {
		if (err) {
			throw new UnauthorizedError();
		}

		req.userId = decoded.id;
		next();
	});
};

const isAdmin = async (req, res, next) => {
	try {
		const user = await userService.show({ id: req.userId });

		if (!user.roles.includes(roles.ADMIN)) {
			throw new ForbiddenError('Admin permission required');
		}
		next();
	} catch (err) {
		next(err);
	}
};

export default {
	verifyToken,
	isAdmin
};
