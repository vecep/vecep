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
