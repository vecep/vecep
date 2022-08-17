import React from 'react';
import styled from 'styled-components';
import Menu from 'components/Menu';
import Content from 'components/Content';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from 'contexts/AuthContext';
import ThemeProvider from 'contexts/ThemeContext';
import ThemeWrapper from 'contexts/ThemeWrapper';
import 'katex/dist/katex.min.css';
import 'antd/dist/antd.min.css';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

const App = () => {
	return (
		<ThemeProvider>
			<ThemeWrapper>
				<AuthProvider>
					<Router>
						<Container>
							<Menu />
							<Content />
						</Container>
					</Router>
				</AuthProvider>
			</ThemeWrapper>
		</ThemeProvider>
	);
};

export default App;
