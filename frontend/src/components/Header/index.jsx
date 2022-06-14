import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { useSearchParams } from 'react-router-dom';

const Header = ({ pageTitle, paths }) => {
	const [searchParams] = useSearchParams();

	return (
		<Container>
			<h1>{pageTitle}</h1>
			{paths?.map((path, idx) => {
				if (searchParams.get(path)) return <span key={idx}> / {searchParams.get(path)}</span>;
			})}
		</Container>
	);
};

Header.propTypes = {
	pageTitle: PropTypes.string.isRequired,
	paths: PropTypes.arrayOf(String)
};

export default Header;
