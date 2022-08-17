import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		outline: 0;
		color: ${({ theme }) => theme.text};
	}
	body {
		background: ${({ theme }) => theme.body};
		color: ${({ theme }) => theme.text};
	}
	h1 {
		color: ${({ theme }) => theme.titles};
	}

	// ant design globals
	.ant-image-preview-operations {
		justify-content: center;
		bottom: 0;
		top: unset !important;
		background: ${({ theme }) => theme.body};
		color: ${({ theme }) => theme.titles};
	}
	.ant-image-mask-info {
		&, * {
			color: unset;
		}
	}
`;
