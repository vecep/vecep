const roles = {
	ADMIN: 'Admin',
	STUDENT: 'Student'
};

export default {
	DEFAULT: roles.STUDENT,
	...roles
};
