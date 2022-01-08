import userService from '../services/user.js';
import { BadRequestError } from '../errors/http/index.js';
import roles from '../utils/roles.js';

const checkDuplicateUsernameAndEmail = async (req, res, next) => {
	try {
		const { username, email } = req.body;

		const [userByName] = await userService.list({ filters: { username } });
		const [userByEmail] = await userService.list({ filters: { email } });

		if (userByName) {
			throw new BadRequestError('Name already being used');
		} else if (userByEmail) {
			throw new BadRequestError('Email already being used');
		}

		next();
	} catch (err) {
		next(err);
	}
};

const checkRoles = (req, res, next) => {
	const { roles: reqRoles } = req.body;

	reqRoles.filter((role) => {
		if (!Object.values(roles).includes(role)) {
			throw new BadRequestError('Invalid role: ' + role);
		}
	});

	next();
};

export default { checkDuplicateUsernameAndEmail, checkRoles };
