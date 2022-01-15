import service from '../services/subject.js';

const create = async (req, res, next) => {
	try {
		res.content = await service.create({ subject: req.body });
		res.message = 'Subject created successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const list = async (req, res, next) => {
	try {
		res.content = await service.list({ filters: req.query });
		res.message = 'Subjects fetched successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const show = async (req, res, next) => {
	try {
		const { id } = req.params;
		res.content = await service.show({ id });
		res.message = 'Subject fetched successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const update = async (req, res, next) => {
	try {
		const { id } = req.params;
		res.content = await service.update({ id, subject: req.body });
		res.message = 'Subject updated successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const destroy = async (req, res, next) => {
	try {
		const { id } = req.params;
		res.content = await service.destroy({ id });
		res.message = 'Subject deleted successfully';
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
