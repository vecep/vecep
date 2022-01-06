import service from '../services/user.js';

const create = async (req, res, next) => {
	try {
		res.content = await service.create({ user: req.body });
		res.message = 'User created successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const list = async (req, res, next) => {
	try {
		res.content = await service.list({ filters: req.query });
		res.message = 'Users fetched successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const show = async (req, res, next) => {
	try {
		const { id } = req.params;
		res.content = await service.show({ id });
		res.message = 'User fetched successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const update = async (req, res, next) => {
	try {
		const { id } = req.params;
		res.content = await service.update({ id, user: req.body });
		res.message = 'User updated successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const destroy = async (req, res, next) => {
	try {
		const { id } = req.params;
		res.content = await service.destroy({ id });
		res.message = 'User deleted successfully';
		next();
	} catch (err) {
		next(err);
	}
};

export default {
	create,
	list,
	show,
	update,
	destroy
};
