import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
	& {
		display: inline-flex;
		align-items: center;
		height: 100%;
		text-decoration: none;
		color: ${({ theme }) => theme.text};
		transition: color 0.5s;

		:hover {
			color: #48a7ff;
		}
	}
`;
