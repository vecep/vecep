import { styled as MStyled } from '@mui/system';
import styled, { css } from 'styled-components';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';

export const CustomAccordion = MStyled(Accordion)`
	background-color: transparent;
	box-shadow: none;
`;

export const Text = MStyled(Typography)`
	text-align: justify;
`;

export const SourceText = styled.span`
	display: block;
	margin-top: 0.5em;
	font-style: italic;
	font-size: 0.95em;
	text-align: right;
	word-wrap: break-word;
`;

export const ImageContainer = styled.div`
	margin: 0.5em 0;
	${(props) =>
		!props.isMobile &&
		css`
			width: 50%;
			margin-inline: 25% auto;
		`}
`;
