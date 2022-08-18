import PropTypes from 'prop-types';
import React from 'react';
import { RevertTextColor } from './styles';

function ColorWrapper({ children }) {
	return <RevertTextColor>{children}</RevertTextColor>;
}

ColorWrapper.propTypes = {
	children: PropTypes.node.isRequired
};

export default ColorWrapper;
