import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Header = ({ pageTitle, paths }) => {
	return (
		<Container>
			<h1>{pageTitle}</h1>
			{paths?.map((path, idx) => {
				if (path) return <span key={idx}> / {path}</span>;
			})}
		</Container>
	);
};

Header.propTypes = {
	pageTitle: PropTypes.string.isRequired,
	paths: PropTypes.arrayOf(String)
};

export default Header;
