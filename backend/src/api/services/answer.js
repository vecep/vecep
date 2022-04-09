import Answer from '../models/Answer.js';

const create = ({ userId, answer }) => Answer.create({ user: userId, ...answer });

const list = ({ userId, filters = {} } = {}) =>
	Answer.find({ userId, filters }).populate(['user', 'exercise']);

const show = ({ id, filters }) => Answer.finOne(id, filters);

const update = ({ id, answer }) => Answer.findByIdAndUpdate(id, answer, { new: true });

const destroy = ({ id }) => Answer.findByIdAndDelete(id);

const destroyAll = ({ userId }) => Answer.deleteMany({ user: userId });

export default {
	create,
	list,
	show,
	update,
	destroy,
	destroyAll
};
