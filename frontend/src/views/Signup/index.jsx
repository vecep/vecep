import React, { useContext, useState } from 'react';
import * as authApi from 'services/auth';
import { handleError } from 'utils';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'contexts/AuthContext';

const Signup = () => {
	const navigate = useNavigate();
	const { setIsLoggedIn } = useContext(AuthContext);

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		authApi
			.signup({ username, email, password })
			.then(() => {
				setIsLoggedIn(true);
				navigate('/exercicios');
			})
			.catch(handleError);
	};

	return (
		<div>
			Cadastro
			<form onSubmit={handleSubmit}>
				<br />
				<label htmlFor="username">Username</label>
				<br />
				<input
					id="username"
					type="text"
					autoComplete="username"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<br />
				<label htmlFor="email">Email</label>
				<br />
				<input
					id="email"
					type="email"
					autoComplete="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<label htmlFor="password">Senha</label>
				<br />
				<input
					id="password"
					type="password"
					autoComplete="current-password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<br />
				<input type="submit" value="Cadastrar" />
			</form>
		</div>
	);
};

export default Signup;
