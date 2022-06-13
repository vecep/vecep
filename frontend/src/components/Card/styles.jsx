import { Button, Chip } from '@mui/material';
import styled, { css, withTheme } from 'styled-components';
import { styled as MStyled } from '@mui/system';

export const Container = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.dimmed};
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	border-radius: 15px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	${(props) =>
		props.animateAnswer &&
		css`
			background-color: ${props.isCorrect ? 'lightgreen' : '#a0232d52'};
			transition: background 1s;
		`}
`;

export const FlexBox = styled.div`
	display: flex;
`;

export const Topics = styled.div`
	display: flex;
	gap: 0.5em;
	flex-wrap: wrap;
`;

export const cardHeaderMobile = css`
	gap: 0;

	& > * {
		flex: 1 1 50%;
	}

	& > ${Topics} {
		order: 2;
		margin-top: 1em;
	}
`;

export const CardHeader = styled.div`
	display: inline-flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 2em;
	padding: 1em;

	& > span:last-of-type {
		flex-grow: 1;
		text-align: right;
		font-weight: bold;
	}

	${({ isMobile }) => isMobile && cardHeaderMobile}
`;

export const CardBody = styled.div`
	padding: 1em;

	& > * {
		padding: 0.5em 0;
	}
`;

export const CardQuestion = styled.div`
	flex: 1;
	text-align: justify;
`;

export const QuestionText = styled.p`
	margin-bottom: 1.5em;
`;

export const SubmitButton = withTheme(MStyled(Button)`
	width: 100%;
	height: 2.5em;
	font-size: 1em;
	border: none;
	border-radius: 0;
	border-bottom-left-radius: inherit;
	border-bottom-right-radius: inherit;
	background: ${({ theme }) => theme.dimmed_secondary};
	color: unset;
`);

export const AnswerFeedback = styled.div`
	width: 100%;
	height: 2.5em;
	border-radius: 0;
	border-bottom-left-radius: inherit;
	border-bottom-right-radius: inherit;
	align-items: center;
	justify-content: center;
	display: flex;
	background-color: ${(props) => (props.isCorrect ? 'lightgreen' : '#a0232d52')};
`;

export const CustomChip = MStyled(Chip)`
	background-color: ${(props) => props.customColor};
`;
