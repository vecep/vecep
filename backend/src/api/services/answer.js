import Answer from '../models/Answer.js';

const create = ({ userId, answerPosition, exerciseId, isCorrect }) =>
	Answer.create({ userId, answerPosition, exerciseId, isCorrect });

const list = ({ filters = {} } = {}) => Answer.find(filters);

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
