import styled, { css } from 'styled-components';

export const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
`;

export const Ghost = styled.div`
	position: absolute;
	z-index: 1;
	transform-origin: center;
	width: 90px;
	margin: 20px 0 0 -45px;
`;

export const GhostHead = styled.div`
	& > * {
		position: absolute;
		z-index: 1;
		width: 15px;
		height: 15px;
		top: 34px;
		left: 50%;
		transform: translate(-50%);
		border-radius: 50px;
		margin-left: -20px;
		transform-origin: center;
	}
`;

export const GhostEyes = styled.div`
	background-color: ${(props) => props.customColor.left}; // left eye
	box-shadow: 40px 0 0 ${(props) => props.customColor.right}; // right eye
`;

export const GhostMouth = styled.div`
	margin: 0;
	top: 60px;
	transform: scale(0);
	border-radius: 20px 20px 12px 12px;
	width: 20px;
	transform-origin: center bottom;
	overflow: hidden;
	background-color: ${(props) => props.customColor};
`;

export const GhostRip = styled.div`
	width: 15px;
	height: 28px;
	position: absolute;
	top: 15px;
	left: 0;
	border-radius: 50%;
	animation: ghost-rips 1.2s linear infinite;

	@keyframes ghost-rips {
		0% {
			left: 0;
			top: 12px;
		}
		50% {
			left: 31px;
			top: 20px;
		}
		100% {
			left: 62px;
			top: 12px;
		}
	}
`;

export const GhostTail = styled.div`
	position: absolute;
	z-index: -1;
	top: 82px;
	height: 55px;
	width: 100%;
	filter: url(#goo);

	&:before {
		content: '';
		background: ${(props) => props.customColor};
		position: absolute;
		bottom: 35px;
		left: 0;
		height: 100px;
		width: 100%;
		border-radius: 40px 40px 5px 5px;
	}

	${({ customColor }) => css`
		${GhostRip} {
			background-color: ${customColor};
			box-shadow: -62px 0 0 ${customColor}, -31px 0 0 ${customColor}, 31px 0 0 ${customColor},
				62px 0 0 ${customColor}, 93px 0 0 ${customColor};
		}
	`}
`;
