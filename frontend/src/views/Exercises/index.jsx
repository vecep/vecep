import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import * as exerciseApi from 'services/exercise';
import { handleError } from 'utils';
import { useLocation, useSearchParams } from 'react-router-dom';
import Card from 'components/Card';
import { Container, Grid } from '@mui/material';
import EmptyMessage from 'components/EmptyMessage';

const Exercises = () => {
	const [searchParams] = useSearchParams();

	const [exercises, setExercises] = useState(null);
	const location = useLocation();

	// TODO: implement React Query lib to data fetching and a fallback component for loading
	useEffect(() => {
		searchParams.get('subject') &&
			exerciseApi
				.list({ subject: searchParams.get('subject') })
				.then(setExercises)
				.catch(handleError);
	}, [location]);

	const renderExercises = () =>
		exercises?.length > 0 ? (
			<Grid container spacing={10}>
				{exercises.map((exercise) => (
					<Grid item xs={12} key={exercise._id}>
						<Card exercise={exercise} />
					</Grid>
				))}
			</Grid>
		) : (
			<EmptyMessage
				title="Nenhum exercício encontrado"
				contact
				description="Isso pode significar nenhum exercício cadastrado, ou algum erro."
			/>
		);

	return (
		<Container>
			<Header pageTitle="Exercícios" paths={['subject']} />
			{renderExercises()}
		</Container>
	);
};

export default Exercises;
