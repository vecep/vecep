export default () => {
	return JSON.parse(localStorage.getItem('user'))?.permissions;
};
