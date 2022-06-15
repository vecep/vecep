import React, { useContext } from 'react';
import * as authApi from 'services/auth';
import { handleError } from 'utils';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'contexts/AuthContext';
import * as S from './styles';
import Header from 'components/Header';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
	username: '',
	email: '',
	password: ''
};

const SignupSchema = Yup.object().shape({
	username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required!'),
	email: Yup.string().email('Invalid email'),
	password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required!')
});

const Signup = () => {
	const navigate = useNavigate();
	const { setIsLoggedIn } = useContext(AuthContext);

	const handleSubmit = ({ username, email, password }) => {
		authApi
			.signup({ username, email, password })
			.then(() => {
				setIsLoggedIn(true);
				navigate('/exercicios');
			})
			.catch(handleError);
	};

	return (
		<>
			<Header pageTitle="Cadastro" />
			<S.Container>
				<Formik
					initialValues={initialValues}
					validationSchema={SignupSchema}
					onSubmit={handleSubmit}
				>
					{({ isValid }) => (
						<Form>
							<label htmlFor="username">Nome</label>
							<br />
							<Field id="username" name="username" />
							<br />
							<ErrorMessage name="username" />

							<br />
							<br />

							<label htmlFor="email">Email</label>
							<br />
							<Field id="email" name="email" type="email" />
							<br />
							<ErrorMessage name="email" />

							<br />
							<br />

							<label htmlFor="password">Password</label>
							<br />
							<Field id="password" name="password" type="password" />
							<br />
							<ErrorMessage name="password" />

							<br />
							<br />

							<button type="submit" disabled={!isValid}>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</S.Container>
		</>
	);
};

export default Signup;
