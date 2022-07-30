const getBaseUrl = () => {
	let baseUrl;

	if (process.env.NODE_ENV === 'production') {
		baseUrl = '';
	} else {
		baseUrl = 'http://localhost:3001';
	}

	return baseUrl;
};

const getApiUrl = () => {
	let apiUrl;

	if (process.env.NODE_ENV === 'production') {
		apiUrl = '';
	} else {
		apiUrl = 'http://localhost:3001/api';
	}

	return apiUrl;
};

const getUrl = { getBaseUrl, getApiUrl };

export default getUrl;
