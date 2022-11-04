/**
 * @param {Object} obj - The object to flatten
 * @param {string} prefix - used for recursion
 * @returns {Object} flattened object with keys separated by '.' (dot)
 * @example flattenKeys({ a: { b: { c: 1, d: 2 } } }); // { 'a.b.c': 1, 'a.b.d': 2 }
 */
const flattenKeys = (obj, prefix = '') => {
	return Object.keys(obj).reduce((acc, k) => {
		const pre = prefix.length ? prefix + '.' : '';

		if (typeof obj[k] === 'object' && !Array.isArray(obj[k]))
			Object.assign(acc, flattenKeys(obj[k], pre + k));
		else acc[pre + k] = obj[k];

		return acc;
	}, {});
};

export default flattenKeys;
