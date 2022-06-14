import React from 'react';
import PropTypes from 'prop-types';
import { mhchemParser } from 'mhchemparser';
import Latex from 'react-latex-next';

const Latext = ({ children, ...props }) => {
	return <Latex {...props}>{mhchemParser.toTex(children, 'tex')}</Latex>;
};

Latext.propTypes = {
	label: PropTypes.bool,
	children: PropTypes.string.isRequired,
	props: PropTypes.any
};

export default Latext;
