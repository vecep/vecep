import service from '../services/exercise.js';

const create = async (req, res, next) => {
	try {
		res.content = await service.create({ exercise: req.body });
		res.message = 'Exercise created successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const list = async (req, res, next) => {
	try {
		res.content = await service.list({ filters: req.query });
		res.message = 'Exercises fetched successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const show = async (req, res, next) => {
	try {
		res.content = await service.show({ id: req.params, filters: req.query });
		res.message = 'Exercise fetched successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const update = async (req, res, next) => {
	try {
		const { id } = req.params;
		res.content = await service.update({ id, exercise: req.body });
		res.message = 'Exercise updated successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const destroy = async (req, res, next) => {
	try {
		const { id } = req.params;
		res.content = await service.destroy({ id });
		res.message = 'Exercise deleted successfully';
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
