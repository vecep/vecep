import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'styles/theme.js';
import GlobalStyles from 'styles/globalStyles.js';
import Menu from 'components/Menu';
import Content from 'components/Content';
import { BrowserRouter as Router } from 'react-router-dom';
import useDarkMode from 'hooks/useDarkMode';
import AuthProvider from 'contexts/AuthContext';
import 'katex/dist/katex.min.css';

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
			<AuthProvider>
				<Router>
					<Container>
						<Menu toggleDarkMode={toggleDarkMode} />
						<Content />
					</Container>
				</Router>
			</AuthProvider>
		</ThemeProvider>
	);
};

export default App;
