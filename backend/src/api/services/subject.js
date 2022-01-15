import Subject from '../models/Subject.js';

const create = ({ subject }) => Subject.create(subject);

const list = ({ filters = {} } = {}) => Subject.find(filters);

const show = ({ id }) => Subject.findById(id);

const update = ({ id, subject }) => Subject.findByIdAndUpdate(id, subject, { new: true });

const destroy = ({ id }) => Subject.findByIdAndDelete(id);

export default {
	create,
	list,
	show,
	update,
	destroy
};
