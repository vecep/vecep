import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userService from '../services/user.js';
import { UnauthorizedError, BadRequestError } from '../errors/http/index.js';
import 'dotenv/config.js';
import roles from '../utils/roles.js';
import mapPermissions from '../utils/permissions.js';

const signup = async ({ user }) => {
	if (user?.roles?.includes(roles.ADMIN)) {
		throw new BadRequestError('User can not have such role');
	}

	const encryptedPassword = bcrypt.hashSync(user.password, 8);

	await userService.create({
		user: {
			...user,
			password: encryptedPassword
		}
	});

	return { ...user, password: undefined };
};

const signin = ({ username, password }) =>
	userService.show({ filters: { username } }).then((user) => {
		if (!user || (password !== user?.password && !bcrypt.compareSync(password, user?.password)))
			throw new UnauthorizedError('Username or password is invalid');

		const token = jwt.sign({ id: user.id }, process.env.SECRET, {
			expiresIn: 86400 // 24 hours
		});

		return {
			...user._doc,
			password: undefined,
			accessToken: token,
			permissions: mapPermissions(user.role)
		};
	});

export default {
	signup,
	signin
};
