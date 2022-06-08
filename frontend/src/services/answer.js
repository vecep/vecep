import api from 'utils/apiHandler';
import { authHeader } from 'utils';

export const list = (params) =>
	api.get('/answers', { params, headers: authHeader() }).then((response) => response.data.content);

export const show = (params) =>
	api.get('/answer', { params, headers: authHeader() }).then((response) => response.data.content);

export const post = (body, params) =>
	api
		.post('/answer', body, { params, headers: authHeader() })
		.then((response) => response.data.content);
