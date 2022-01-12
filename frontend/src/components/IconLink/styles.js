import styled from 'styled-components';

export const Container = styled.div`
	& > a {
		display: flex;
		flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
		align-items: center;
		justify-content: space-between;
		gap: 5px;
	}
`;
