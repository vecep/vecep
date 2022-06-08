import styled from 'styled-components';

export const Container = styled.main`
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: ${(props) => (props.isMobile ? '3em 5%' : '3em 15%')};
`;
