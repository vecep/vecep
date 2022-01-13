import styled from 'styled-components';
import Link from 'components/Link';

export const Navbar = styled.nav`
	display: flex;
	position: sticky;
	height: 45px;
	justify-content: flex-end;
	align-items: center;
	background-color: ${({ theme }) => theme.body};
	z-index: 9999;
	padding: 0 100px;

	& > :not(:first-child, :last-child) {
		margin-right: 50px;
	}
`;

export const Logo = styled.div`
	justify-self: flex-start;
	flex: auto;
`;

export const ToggleButton = styled.button`
	background: none;
	font-size: 17px;
	border: none;
	cursor: pointer;
	padding: 0;
`;

export const DropdownContent = styled.div`
	display: none;
	position: absolute;
	background-color: ${({ theme }) => theme.body_reverse};
	color: ${({ theme }) => theme.text_reverse};
	border-radius: 5px;
	text-align: center;
	padding: 10px 20px;
	right: 0;
	width: max-content;
	overflow: hidden;
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

	a {
		color: ${({ theme }) => theme.text_reverse};
		margin: 7px 0;
	}
`;

export const Dropdown = styled.div`
	position: relative;
	display: inline-block;

	&:hover ${DropdownContent} {
		display: block;
	}
`;

export const LoginLink = styled(Link)`
	&& {
		color: #48a7ff;
		text-decoration-color: transparent;
		transition: 0.5s;

		:hover {
			text-decoration: underline;
		}
	}
`;
