import React from 'react';
import Header from 'components/Header';
import * as exerciseApi from 'services/exercise';
import { useSearchParams } from 'react-router-dom';
import Card from 'components/Card';
import { Container, Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import AsyncLoader from 'components/AsyncLoader';
import { useQuery } from '@tanstack/react-query';
import ExercisesFilterControl from 'components/ExercisesFilterControl';

const Exercises = () => {
	const [searchParams] = useSearchParams();
	const [filters, setFilters] = React.useState({});

	const queryKey = ['exercises', filters];
	const queryFn = () =>
		searchParams.get('subject') &&
		exerciseApi.list({
			filters: { subject: searchParams.get('subject'), ...filters }
		});

	// TODO: implement useInfiniteQuery/lazy loading due to
	// the amount of cards to be rendered
	const {
		data: exercises,
		refetch,
		isRefetching
	} = useQuery(queryKey, queryFn, {
		refetchOnWindowFocus: false
	});

	const onChangeFilters = (type, value) => {
		setFilters((prevState) => ({ ...prevState, [type]: value }));
	};

	return (
		<Container>
			<Header pageTitle="Exercícios" paths={['subject']} />
			<ExercisesFilterControl onChange={onChangeFilters} />

			<AsyncLoader queryKey={queryKey} queryFn={queryFn}>
				<LoadingButton
					loading={isRefetching}
					onClick={refetch}
					variant="outlined"
					sx={{ marginBottom: '1em' }}
				>
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
