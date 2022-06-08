import Answer from '../models/Answer.js';

const create = ({ userId, answerId, exerciseId, isCorrect }) =>
	Answer.create({ userId, answerId, exerciseId, isCorrect });

const list = ({ userId, filters = {} } = {}) => Answer.find({ userId, filters });

const show = ({ queryParameters, filters }) => Answer.finOne(queryParameters, filters);

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
