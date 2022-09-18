import React, { useState, useContext } from 'react';
import * as S from './styles';
import PropTypes from 'prop-types';
import * as answerApi from 'services/answer';
import Options from './Options';
import Reference from './Reference';
import { handleError, stringToColor } from 'utils';
import { isEmpty } from 'lodash';
import useMobile from 'hooks/useMobile';
import { AuthContext } from 'contexts/AuthContext';
import Latext from 'components/Latext';
import { useQuery } from '@tanstack/react-query';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const Card = ({ exercise }) => {
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [answered, setAnswered] = useState(false);
	const [isCorrect, setIsCorrect] = useState(null);
	const [isMobile] = useMobile();
	const { isLoggedIn } = useContext(AuthContext);

	const queryKey = ['answers', exercise._id];
	const queryFn = (context) => {
		return answerApi.list({ exerciseId: context.queryKey[1] });
	};
	useQuery(queryKey, queryFn, {
		refetchOnWindowFocus: false,
		initialData: null,
		enabled: isLoggedIn,
		onSuccess: ([data]) => {
			setSelectedAnswer(data?.answerPosition);
			setAnswered(!!data);
			setIsCorrect(data?.isCorrect);
		}
	});

	const handleChangeAnswer = (e) => {
		setSelectedAnswer(parseInt(e.target.value));
	};

	const handleSubmit = () => {
		const selectedAnswerObj = exercise.options.find((o) => o.position == selectedAnswer);
		setAnswered(true);
		setIsCorrect(selectedAnswerObj.isCorrect);

		isLoggedIn &&
			answerApi
				.post({
					exerciseId: exercise._id,
					answerPosition: selectedAnswerObj.position,
					isCorrect: selectedAnswerObj.isCorrect
				})
				.catch(handleError);
	};

	const renderTopics = () =>
		exercise.topics.map((t) => (
			<S.CustomChip key={t} label={t} customColor={() => stringToColor(t, '80')} />
		));
	const renderReferences = () =>
		exercise.references.map((r, index) => (
			<Reference
				key={r._id}
				reference={r}
				position={exercise.references.length > 1 ? index + 1 : null}
			/>
		));

	const renderFooter = () => {
		if (answered)
			return (
				<S.AnswerFeedback isCorrect={isCorrect}>
					{isCorrect ? (
						<>
							{'Resposta correta'}
							<CheckCircleRoundedIcon sx={{ fill: '#008000' }} />
						</>
					) : (
						<>
							{'Resposta incorreta'}
							<CancelRoundedIcon sx={{ fill: '#FF0000' }} />
						</>
					)}
				</S.AnswerFeedback>
			);

		return (
			<S.SubmitButton onClick={handleSubmit} disabled={!selectedAnswer}>
				Responder
			</S.SubmitButton>
		);
	};

	return (
		<S.Container animateAnswer={answered} isCorrect={isCorrect}>
			<S.CardHeader isMobile={isMobile}>
				<span>{exercise.subject}</span>
				<S.Topics>{renderTopics()}</S.Topics>
				<span>{exercise.exam.year}</span>
			</S.CardHeader>

			<S.CardBody>
				{!isEmpty(exercise.references) && renderReferences()}
				<S.CardQuestion>
					<S.QuestionText>
						<Latext>{exercise.question}</Latext>
					</S.QuestionText>
					<Options
						options={exercise.options}
						selectedAnswer={selectedAnswer}
						handleChange={handleChangeAnswer}
						answered={answered}
					/>
				</S.CardQuestion>
			</S.CardBody>

			{renderFooter()}
		</S.Container>
	);
};

Card.propTypes = {
	exercise: PropTypes.shape({
		exam: PropTypes.shape().isRequired,
		options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
		question: PropTypes.string.isRequired,
		references: PropTypes.arrayOf(PropTypes.shape()),
		subject: PropTypes.string.isRequired,
		topics: PropTypes.arrayOf(PropTypes.string).isRequired,
		_id: PropTypes.string.isRequired
	})
};

export default Card;
