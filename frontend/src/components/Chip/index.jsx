import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Chip = ({ label, customColor, ...props }) => (
	<S.CustomChip {...props} customColor={customColor} label={label} />
);

Chip.defaultProps = {
	label: '',
	customColor: () => '#c4c4c4'
};

Chip.propTypes = {
	label: PropTypes.string,
	customColor: PropTypes.func
};

export default Chip;
