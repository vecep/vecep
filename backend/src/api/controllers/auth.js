import service from '../services/auth.js';
import 'dotenv/config.js';

const signup = async (req, res, next) => {
	try {
		res.content = await service.signup({ user: req.body });
		res.message = 'Your account has been successfully created';
		next();
	} catch (err) {
		next(err);
	}
};

const signin = async (req, res, next) => {
	try {
		res.content = await service.signin(req.body);
		res.message = 'Logged in successfully';
		next();
	} catch (err) {
		next(err);
	}
};

export default {
	signup,
	signin
};
