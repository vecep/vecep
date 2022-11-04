import React from 'react';
import styled from 'styled-components';
import Menu from 'components/Menu';
import Content from 'components/Content';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from 'contexts/AuthContext';
import ThemeProvider from 'contexts/ThemeContext';
import ThemeWrapper from 'contexts/ThemeWrapper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'katex/dist/katex.min.css';
import 'antd/dist/antd.min.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
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
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default App;
