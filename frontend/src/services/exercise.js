import api from 'utils/apiHandler';

export const list = (params) =>
	api.get('/exercises', { params }).then((response) => response.data.content);
