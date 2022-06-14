import React, { useEffect, useState } from 'react';
import { Container, Subject, NotFoundMessage } from './styles';
import Link from 'components/Link';
import Header from 'components/Header';
import * as subjectApi from 'services/subject';
import * as exerciseApi from 'services/exercise';
import { handleError } from 'utils';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import Card from 'components/Card';
import { Button } from '@mui/material';

const Exercises = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const [subjects, setSubjects] = useState([]);
	const [exercises, setExercises] = useState(null);
	const location = useLocation();

	useEffect(() => {
		subjectApi.list().then(setSubjects).catch(handleError);
	}, []);

	useEffect(() => {
		searchParams.get('subject') &&
			exerciseApi
				.list({ subject: searchParams.get('subject') })
				.then(setExercises)
				.catch(handleError);
	}, [location]);

	const renderSubjectsGrid = () =>
		subjects.sort().map(({ _id, title }) => (
			<Subject key={_id}>
				<Link to={`?subject=${title}`}>{title}</Link>
			</Subject>
		));

	const renderExercises = () =>
		exercises?.length > 0 ? (
			exercises.map((exercise) => <Card key={exercise._id} exercise={exercise} />)
		) : (
			<NotFoundMessage>
				<p>Nenhum exercício encontrado :/</p>
				<Button variant="outlined" onClick={() => navigate(-1)}>
					Voltar
				</Button>
			</NotFoundMessage>
		);

	return (
		<>
			<Header pageTitle="Exercícios" paths={['subject']} />
			<Container>
				{searchParams.get('subject') ? renderExercises() : renderSubjectsGrid()}
			</Container>
		</>
	);
};

export default Exercises;
