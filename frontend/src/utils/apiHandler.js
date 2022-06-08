import Axios from 'axios';
import { getUrl } from 'utils';

const API_URL = getUrl.getApiUrl();

const post = (endpoint, body, params) => Axios.post(API_URL + endpoint, body, params);

const get = (endpoint, params) => Axios.get(API_URL + endpoint, params);

const put = (endpoint, body, params) => Axios.put(API_URL + endpoint, body, params);

const patch = (endpoint, body, params) => Axios.patch(API_URL + endpoint, body, params);

const destroy = (endpoint, params) => Axios.delete(API_URL + endpoint, params);

export default { post, get, put, patch, destroy };
