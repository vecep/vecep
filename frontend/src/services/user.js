import api from 'utils/apiHandler';

const resetPassword = (newpassword, id) =>
	api.patch(`user/?=${id}`, {
		password: newpassword
	});
export default {
	resetPassword
};
