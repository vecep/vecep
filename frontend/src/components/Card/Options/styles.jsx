import styled from 'styled-components';
import { styled as MStyled } from '@mui/system';
import { get } from 'lodash';
import Radio from '@mui/material/Radio';

export const QuestionContainer = styled.div`
	overflow-wrap: break-word;
	height: 100%;
	margin-right: 35px;
	width: fit-content;
`;

export const OptionsContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 10px;
	margin-bottom: 15px;
`;

export const Option = MStyled(Radio)``;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: auto auto auto;
	grid-template-rows: auto auto auto auto auto;
	grid-auto-flow: ${(props) => (props.imageDisplay ? 'row' : 'column')};
`;

export const ImageWrapper = styled.div`
	width: 10em;
	box-shadow: 0 0 15px 0 ${(props) => get(props, 'answerColor', 'transparent')};
`;
