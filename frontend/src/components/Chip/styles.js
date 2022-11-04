import { Chip } from '@mui/material';
import { styled as MStyled } from '@mui/system';

export const CustomChip = MStyled(Chip, {
	shouldForwardProp: (prop) => prop !== 'customColor'
})`
	background-color: ${(props) => props.customColor};
`;
