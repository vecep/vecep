import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'styles/theme.js';
import GlobalStyles from 'styles/globalStyles.js';
import Menu from 'components/Menu';
import { BrowserRouter as Router } from 'react-router-dom';
import useDarkMode from 'hooks/useDarkMode';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

const App = () => {
	const [isDarkMode, toggleDarkMode] = useDarkMode();

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Router>
				<Container>
					<Menu toggleDarkMode={toggleDarkMode} />
				</Container>
			</Router>
		</ThemeProvider>
	);
};

export default App;
