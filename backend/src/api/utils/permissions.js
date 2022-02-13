import roles from './roles.js';

const permissions = {
	manage: [roles.ADMIN],
	practice: [roles.ADMIN, roles.STUDENT]
};

const mapPermissions = (role) =>
	Object.entries(permissions)
		.filter(([, authorizedRoles]) => {
			return authorizedRoles.includes(role);
		})
		.map(([key]) => key);

export default mapPermissions;
