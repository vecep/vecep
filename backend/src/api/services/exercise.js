import Exercise from '../models/Exercise.js';
import Answer from '../models/Answer.js';

const create = ({ exercise }) => Exercise.create(exercise);

const listAnswered = (userId) => {
	return Answer.find({ userId }).distinct('exerciseId');
};

const list = async ({ filters = {}, sort } = {}) => {
	const finalFilters = { ...filters };

	if (filters.answered === false) finalFilters._id = { $nin: await listAnswered(filters.userId) };

	console.log(finalFilters);
	return Exercise.find({
		$and: [
			finalFilters.subject ? { subject: finalFilters.subject } : {},
			finalFilters.topics ? { topics: { $in: finalFilters.topics } } : {},
			finalFilters['exam.year'] ? { 'exam.year': finalFilters['exam.year'] } : {},
			finalFilters._id ? { _id: finalFilters._id } : {}
		]
	}).sort(sort);
};

const show = ({ id, filters = {} } = {}) => Exercise.findOne(id, filters);

const update = ({ id, exercise }) => Exercise.findByIdAndUpdate(id, exercise, { new: true });

const destroy = ({ id }) => Exercise.findByIdAndDelete(id);

const listFilterData = async () => {
	const [filters] = await Exercise.aggregate([
		{ $unwind: '$topics' },
		{
			$group: {
				_id: null,
				topics: { $addToSet: '$topics' },
				years: { $addToSet: '$exam.year' }
			}
		}
	]);

	filters.topics.sort();
	filters.years.sort((a, b) => b - a);

	return { ...filters, _id: undefined };
};

export default {
	create,
	list,
	show,
	update,
	destroy,
	listFilterData
};
