const authHeader = () => {
	const user = JSON.parse(localStorage.getItem('user'));

	if (user?.accessToken) return { 'x-access-token': user.accessToken };
	return {};
};

export default authHeader;
