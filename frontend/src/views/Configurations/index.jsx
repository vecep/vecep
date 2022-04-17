import React from 'react';
import VecepButton from 'components/Button';
import * as userApi from 'services/user';

const Configurations = () => {
	return (
		<div>
			<VecepButton
				onClick={() => {
					userApi.resetPassword('teste', id);
				}}
				variant="contained"
				color="error"
			>
				Trocar senha
			</VecepButton>
		</div>
	);
};

export default Configurations;
