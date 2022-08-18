import React from 'react';
import { Subject } from './styles';
import Link from 'components/Link';
import Header from 'components/Header';
import * as subjectApi from 'services/subject';
import { Container, Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import AsyncLoader from 'components/AsyncLoader';

const Subjects = () => {
	const queryKey = ['subjects'];
	const queryFn = () => subjectApi.list();
	const { data: subjects } = useQuery(queryKey, queryFn, {
		refetchOnWindowFocus: false
	});

	return (
		<Container>
			<Header pageTitle="Matérias" />

			<AsyncLoader queryKey={queryKey} queryFn={queryFn}>
				<Grid container spacing={3}>
					{subjects?.sort?.()?.map?.(
						// TODO: move sorting to backend
						({ _id, title }) => (
							<Grid item xs={3} key={_id}>
								<Subject>
									<Link to={`/exercicios?subject=${title}`}>{title}</Link>
								</Subject>
							</Grid>
						)
					)}
				</Grid>
			</AsyncLoader>
		</Container>
	);
};

export default Subjects;
