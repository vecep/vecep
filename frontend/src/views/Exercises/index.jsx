import React, { useEffect, useState } from 'react';
import { Container, Subject } from './styles';
import Link from 'components/Link';
import Header from 'components/Header';
import * as subjectApi from 'services/subject';
import * as exerciseApi from 'services/exercise';
import { handleError } from 'utils';
import { useLocation, useSearchParams } from 'react-router-dom';
import Card from 'components/Card';

const Exercises = () => {
	const [subjects, setSubjects] = useState([]);
	const [searchParams] = useSearchParams();
	const [subject, setSubject] = useState();
	const [exercises, setExercises] = useState([]);
	const location = useLocation();

	useEffect(() => {
		subjectApi.list().then(setSubjects).catch(handleError);
		exerciseApi.list().then(setExercises).catch(handleError);
	}, []);

	useEffect(() => {
		setSubject(searchParams.get('subject'));
	}, [location]);

	const renderSubjectsGrid = () =>
		subjects.sort().map(({ _id, title }) => (
			<Subject key={_id}>
				<Link to={`?subject=${title}`}>{title}</Link>
			</Subject>
		));

	const renderExercises = () =>
		exercises?.map((exercise) => <Card key={exercise._id} exercise={exercise}></Card>);

	return (
		<>
			<Header pageTitle="Exercícios" />
			<Container>{!subject ? renderSubjectsGrid() : renderExercises()}</Container>
		</>
	);
};

export default Exercises;
