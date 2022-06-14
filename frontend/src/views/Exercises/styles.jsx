import styled from 'styled-components';

export const Container = styled.ul`
	display: flex;
	gap: 1.5em;
	flex-wrap: wrap;
	width: 100%;
	padding: 0;

	> * {
		flex: 1 1 15em;
	}
`;

export const Subject = styled.li`
	height: 13em;
	background-color: ${({ theme }) => theme.body_reverse};
	border-radius: 10px;
	border: none;
	font-family: inherit;
	list-style: none;
	overflow: hidden;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.7em;
		word-wrap: break-word;
		text-align: center;
		width: 100%;
		height: 100%;
		padding-inline: 5px;
		color: ${({ theme }) => theme.text_reverse};
	}

	:hover {
		transform: translate(0, -10px);
		cursor: pointer;
	}
`;

export const NotFoundMessage = styled.div`
	> p {
		margin-bottom: 1em;
	}
`;
