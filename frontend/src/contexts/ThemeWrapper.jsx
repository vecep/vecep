import PropTypes from 'prop-types';
import React from 'react';
import { lightTheme, darkTheme } from 'styles/theme.js';
import GlobalStyles from 'styles/globalStyles.js';
import useDarkMode from 'hooks/useDarkMode';
import { ThemeProvider } from 'styled-components';

const ThemeWrapper = ({ children }) => {
	const [isDarkMode] = useDarkMode();
	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<>
				<GlobalStyles />
				{children}
			</>
		</ThemeProvider>
	);
};

ThemeWrapper.propTypes = {
	children: PropTypes.any
};

export default ThemeWrapper;
