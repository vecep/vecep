import React, { useState, useContext } from 'react';
import * as authApi from 'services/auth';
import { handleError } from 'utils';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'contexts/AuthContext';

const Login = () => {
	const navigate = useNavigate();
	const { setIsLoggedIn } = useContext(AuthContext);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		authApi
			.signin({ username, password })
			.then(() => {
				setIsLoggedIn(true);
				navigate('/exercicios');
			})
			.catch(handleError);
	};

	return (
		<div>
			Login
			<form onSubmit={handleSubmit}>
				<br />
				<label htmlFor="username">Username</label>
				<br />
				<input
					id="username"
					type="text"
					autoComplete="username"
					onChange={(e) => setUsername(e.target.value)}
				></input>
				<br />
				<label htmlFor="password">Senha</label>
				<br />
				<input
					id="password"
					type="password"
					autoComplete="current-password"
					onChange={(e) => setPassword(e.target.value)}
				></input>
				<br />
				<br />
				<input type="submit" value="Login" />
			</form>
		</div>
	);
};

export default Login;
