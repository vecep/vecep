import service from '../services/answer.js';

const create = async (req, res, next) => {
	try {
		const { userId } = req;
		res.content = await service.create({ userId, answer: req.body });
		res.message = 'Answer created successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const list = async (req, res, next) => {
	try {
		const { userId } = req;
		res.content = await service.list({ userId, filters: req.query });
		res.message = 'Answers fetched successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const show = async (req, res, next) => {
	try {
		res.content = await service.show({ id: req.params, filters: req.query });
		res.message = 'Answer fetched successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const update = async (req, res, next) => {
	try {
		const { id } = req.params;
		res.content = await service.update({ id, answer: req.body });
		res.message = 'Answer updated successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const destroy = async (req, res, next) => {
	try {
		const { id } = req.params;
		res.content = await service.destroy({ id });
		res.message = 'Answer deleted successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const destroyAll = async (req, res, next) => {
	try {
		const { userId } = req;
		res.content = await service.destroyAll({ userId });
		res.message = 'Answer deleted successfully';
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
	destroy,
	destroyAll
};
