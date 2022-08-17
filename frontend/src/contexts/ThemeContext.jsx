import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const initialContext = {
	isDarkMode: false
};

export const ThemeContext = createContext(initialContext);

const ThemeProvider = (props) => {
	const [context, setContext] = useState(initialContext);

	return (
		<ThemeContext.Provider
			value={{
				...context,
				setIsDarkMode: (value) => setContext({ ...context, isDarkMode: value })
			}}
		>
			{props.children}
		</ThemeContext.Provider>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired
};

export default ThemeProvider;
