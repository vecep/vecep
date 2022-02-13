import Axios from 'axios';
import { getUrl } from 'utils';

const API_URL = getUrl.getApiUrl();

const post = (endpoint, params) => Axios.post(API_URL + endpoint, params);

const get = (endpoint, params) => Axios.get(API_URL + endpoint, params);

const put = (endpoint, params) => Axios.put(API_URL + endpoint, params);

const patch = (endpoint, params) => Axios.patch(API_URL + endpoint, params);

const destroy = (endpoint, params) => Axios.delete(API_URL + endpoint, params);

export default { post, get, put, patch, destroy };
