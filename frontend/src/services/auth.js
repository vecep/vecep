import api from 'utils/apiHandler';

export const signup = ({ username, email, password }) =>
	api
		.post('/auth/signup', {
			username,
			email,
			password
		})
		.then((response) => {
			const user = response.data.content;
			signin({ username: user.username, password });
		});

export const signin = ({ username, password }) =>
	api
		.post('/auth/signin', {
			username,
			password
		})
		.then((response) => {
			const user = response.data.content;
			localStorage.setItem('user', JSON.stringify(user));

			return user;
		});

export const logout = () => {
	localStorage.removeItem('user');
};

export const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem('user'));
};
