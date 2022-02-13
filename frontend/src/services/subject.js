import api from 'utils/apiHandler';

export const list = (params) =>
	api.get('/subjects', params).then((response) => response.data.content);
