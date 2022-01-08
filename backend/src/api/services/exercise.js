import Exercise from '../models/Exercise.js';

const create = ({ exercise }) => Exercise.create(exercise);

const list = ({ filters = {} } = {}) => Exercise.find(filters);

const show = ({ id }) => Exercise.findById(id);

const update = ({ id, exercise }) => Exercise.findByIdAndUpdate(id, exercise, { new: true });

const destroy = ({ id }) => Exercise.findByIdAndDelete(id);

export default {
	create,
	list,
	show,
	update,
	destroy
};
