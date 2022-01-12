import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		outline: 0;
		transition: 0.2s;
	} 
	.container {
		margin: auto;
		width: 50%;        
		padding: 10px;
		text-align: center;        
	}
	body {
		background: ${(props) => props.theme.background};
		color: ${(props) => props.theme.text};        
	}
	h1 {
		color: ${(props) => props.theme.titles};        
	}
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.text};
		transition: 0.5s;

		&:hover {
			color: #48a7ff !important;
		}
	}
`;
