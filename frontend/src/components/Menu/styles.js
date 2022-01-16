import styled from 'styled-components';
import Link from 'components/Link';

export const Links = styled.div`
	display: flex;
	align-items: center;
	height: 100%;

	> * {
		flex-basis: 100%;
		text-align: center;
		justify-content: center;
	}

	@media only screen and (max-width: 768px) {
		visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
		transform: translateY(${({ open }) => (open ? '0%' : '-150%')});
		position: absolute;
		top: 100%;
		width: 100%;
		right: 0;
		flex-direction: column;
		height: auto;
		background-color: ${({ theme }) => theme.dimmed};
		border-radius: 15px;
		z-index: -1;
		transition: ${({ animate }) => (!animate ? 'visibility 700ms, transform 700ms ease' : 'none')};

		&& > * {
			flex: 1;
			text-align: center;
			justify-content: center;
			width: 100%;
			color: ${({ theme }) => theme.text};
			padding: 25px 25px;
			box-sizing: border-box;
		}
	}
`;

export const Navbar = styled.nav`
	display: flex;
	position: sticky;
	top: 0;
	padding-inline: 50px;
	height: 50px;
	background: ${({ theme }) => theme.body};
	box-shadow: 0 1px 8px 1px rgba(0, 0, 0, 0.2);
	border-radius: 0 0 15px 15px;
	z-index: 9999;

	> * {
		flex-basis: 100%;
	}

	.hamburger-react {
		display: none;
		flex: none;
	}

	@media only screen and (max-width: 768px) {
		padding-inline: 15px 20px;

		.hamburger-react {
			display: block;
		}
	}
`;

export const Logo = styled.div`
	justify-self: flex-start;
	height: 100%;

	a {
		padding-inline: 25px;
	}
`;

export const ToggleButton = styled.button`
	display: inline-flex;
	height: 100%;
	align-items: center;
	background: none;
	font-size: 17px;
	border: none;
	cursor: pointer;
	padding: 0;

	@media only screen and (max-width: 768px) {
		display: none;
	}

	:active {
		background: ${({ theme }) => theme.dimmed};
		transition: background 300ms ease-out;
	}
`;

export const DropdownContent = styled.div`
	position: absolute;
	top: 100%;
	transform: translateY(-250%);
	visibility: hidden;
	background-color: ${({ theme }) => theme.body_reverse};
	color: ${({ theme }) => theme.text_reverse};
	border-radius: 5px;
	width: max-content;
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	overflow: hidden;
	transition: ${({ animate }) => (animate ? 'visibility 1s, transform 700ms ease-in-out' : 'none')};

	* {
		color: ${({ theme }) => theme.text_reverse};
	}

	a {
		padding: 0.7em 1em;

		:active {
			background: ${({ theme }) => theme.dimmed_reverse};
			transition: background 200ms ease-out;
		}
	}

	@media only screen and (max-width: 768px) {
		display: flex;
		visibility: visible;
		top: 0;
		transform: translateY(0%);
		justify-content: space-evenly;
		transition: 0s;

		a {
			display: flex;
			flex-direction: column;
		}
	}
`;

export const Dropdown = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;

	&:hover ${DropdownContent} {
		transform: translateY(0%);
		visibility: visible;
	}

	@media only screen and (max-width: 768px) {
		visibility: hidden;
	}
`;

export const LoginLink = styled(Link)`
	&& {
		color: #48a7ff;
		text-decoration-color: transparent;
		transition: color 0.5s;

		:hover {
			text-decoration: underline;
		}
	}
`;
