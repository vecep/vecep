import api from 'utils/apiHandler';

const signup = (username, email, password) =>
	api.post('/auth/signup', {
		username,
		email,
		password
	});

const signin = (username, password) =>
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

const logout = () => {
	localStorage.removeItem('user');
};

const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem('user'));
};

export default {
	signup,
	signin,
	logout,
	getCurrentUser
};
