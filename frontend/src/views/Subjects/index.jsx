import React, { useEffect, useState } from 'react';
import { Subject } from './styles';
import Link from 'components/Link';
import Header from 'components/Header';
import * as subjectApi from 'services/subject';
import { handleError } from 'utils';
import { Container, Grid } from '@mui/material';
import EmptyMessage from 'components/EmptyMessage';

const Subjects = () => {
	const [subjects, setSubjects] = useState([]);

	useEffect(() => {
		subjectApi.list().then(setSubjects).catch(handleError);
	}, []);

	return (
		<Container>
			<Header pageTitle="Matérias" />
			{subjects.length ? (
				<Grid container spacing={3}>
					{subjects.sort().map(
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
			) : (
				<EmptyMessage
					title="Nenhuma matéria encontrada"
					contact
					description="Isso pode significar nenhum exercício cadastrado, ou algum erro."
				/>
			)}
		</Container>
	);
};

export default Subjects;
