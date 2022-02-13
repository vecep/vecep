import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 30em;
	background-color: ${({ theme }) => theme.dimmed};
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	border-radius: 15px;
`;
