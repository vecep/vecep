import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
	& {
		text-decoration: none;
		color: ${({ theme }) => theme.text};
		transition: 0.5s;

		:hover {
			color: #48a7ff;
		}
	}
`;
