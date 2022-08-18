import React from 'react';
import Header from 'components/Header';
import * as exerciseApi from 'services/exercise';
import { useSearchParams } from 'react-router-dom';
import Card from 'components/Card';
import { Container, Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import AsyncLoader from 'components/AsyncLoader';
import { useQuery } from '@tanstack/react-query';

const Exercises = () => {
	const [searchParams] = useSearchParams();
	const queryKey = ['exercises'];
	const queryFn = () =>
		searchParams.get('subject') && exerciseApi.list({ subject: searchParams.get('subject') });

	// TODO: implement useInfiniteQuery/lazy loading due to
	// the amount of cards to be rendered
	const {
		data: exercises,
		refetch,
		isRefetching
	} = useQuery(queryKey, queryFn, {
		refetchOnWindowFocus: false
	});

	return (
		<Container>
			<Header pageTitle="Exercícios" paths={['subject']} />

			<AsyncLoader queryKey={queryKey} queryFn={queryFn}>
				<LoadingButton loading={isRefetching} onClick={refetch} variant="outlined">
					Recarregar
				</LoadingButton>
				<Grid container spacing={10}>
					{exercises?.map?.((exercise) => (
						<Grid item xs={12} key={exercise._id}>
							<Card exercise={exercise} />
						</Grid>
					))}
				</Grid>
			</AsyncLoader>
		</Container>
	);
};

export default Exercises;
