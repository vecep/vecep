import User from '../models/User.js';

const create = ({ user }) => User.create(user);

const list = ({ filters = {} } = {}) => User.find(filters);

const show = ({ queryParams, filters }) => User.findOne(queryParams, filters);

const update = ({ id, user }) => User.findByIdAndUpdate(id, user, { new: true });

const destroy = ({ id }) => User.findByIdAndDelete(id);

export default {
	create,
	list,
	show,
	update,
	destroy
};
