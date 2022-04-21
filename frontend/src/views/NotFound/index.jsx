import React from 'react';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<S.Container>
			<SmartToyIcon fontSize="large"></SmartToyIcon>
			<p align="center">Erro 404 infelizmente a página não foi encontrada.</p>
			<S.CustomVecepButton onClick={() => history.back()}>Página anterior</S.CustomVecepButton>
			<S.CustomVecepButton onClick={() => navigate('/home')}>Home</S.CustomVecepButton>
		</S.Container>
	);
};

export default NotFound;
