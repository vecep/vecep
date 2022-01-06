import service from '../services/cloudinary.js';

const create = async (req, res, next) => {
	try {
		res.content = await service.create(req.body);
		res.message = 'Image created successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const list = async (req, res, next) => {
	try {
		res.content = await service.list();
		res.message = 'Images fetched successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const show = async (req, res, next) => {
	try {
		const { id } = req.params;
		res.content = await service.show({ public_id: id });
		res.message = 'Image fetched successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const update = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { newId } = req.body;
		res.content = await service.update({ from_public_id: id, to_public_id: newId });
		res.message = 'Image updated successfully';
		next();
	} catch (err) {
		next(err);
	}
};

const destroy = async (req, res, next) => {
	try {
		const { id } = req.params;
		res.content = await service.destroy({ public_id: id });
		res.message = 'Image deleted successfully';
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
