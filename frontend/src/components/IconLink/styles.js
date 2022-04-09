import styled from 'styled-components';

export const Container = styled.div`
	& > a {
		display: flex;
		flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
		align-items: center;
		justify-content: ${({ spaced }) => (spaced ? 'space-between' : 'center')};
		gap: 5px;
	}
`;
