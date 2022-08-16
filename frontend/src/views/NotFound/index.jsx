import { Button, Container } from '@mui/material';
import GhostFollower from 'components/GhostFollower';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, Subtitle, Text } from './styles';

const NotFound = () => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<Container>
			<Title>
				4 <GhostFollower /> 4
			</Title>
			<Subtitle>Página não encontrada</Subtitle>

			<Text>Foi mal, mas parece que a página que você está procurando não existe.</Text>
			<Text>
				Tira um tempo para relaxar, respirar fundo e quem sabe conversar com o Fantasminha.
			</Text>

			<Button variant="outlined" color="error" onClick={goBack}>
				Voltar
			</Button>
		</Container>
	);
};

export default NotFound;
