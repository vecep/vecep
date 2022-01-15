import React from 'react';
import { StyledSnackbar } from './styles';

const Snackbar = (props) => (
	<StyledSnackbar
		{...props}
		open
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'left'
		}}
	/>
);

export default Snackbar;
