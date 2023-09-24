import { authHeader } from 'utils';
import api from 'utils/apiHandler';

export const list = (params) =>
	api
		.get('/exercises', { params, headers: authHeader() })
		.then((response) => response.data.content);

export const listFilters = (params) =>
	api.get('/exercise/filter-data', { params }).then((response) => response.data.content);
