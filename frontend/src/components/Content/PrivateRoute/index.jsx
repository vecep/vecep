import React from 'react';
import PropTypes from 'prop-types';
import NotFound from 'views/NotFound';

const PrivateRoute = ({ children, permission }) => {
	return permission ? children : <NotFound />;
};

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
	permission: PropTypes.bool
};

export default PrivateRoute;
