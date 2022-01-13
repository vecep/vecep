import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		outline: 0;
		transition: 0.2s;
	}
	body {
		background: ${({ theme }) => theme.body};
		color: ${({ theme }) => theme.text};
	}
	h1 {
		color: ${({ theme }) => theme.titles};        
	}
`;
