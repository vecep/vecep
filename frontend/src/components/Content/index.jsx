import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Management from 'views/Management';
import Configurations from 'views/Configurations';
import Exams from 'views/Exams';
import Exercises from 'views/Exercises';
import Home from 'views/Home';
import Login from 'views/Login';
import NotFound from 'views/NotFound';
import Practice from 'views/Practice';
import Register from 'views/Register';
import Results from 'views/Results';
import { Container } from './styles.js';
import usePermissions from 'hooks/usePermissions';

const Content = () => {
	const permissions = usePermissions();

	return (
		<Container>
			<Routes>
				<Route exact path="/" element={<Navigate to="/home" />} />
				<Route exact path="/home" element={<Home />} />
				<Route path="/exercicios" element={<Exercises />} />
				<Route path="/provas" element={<Exams />} />
				<Route path="/simulado" element={<Practice />} />
				<Route path="/resultados" element={<Results />} />
				<Route path="/definicoes" element={<Configurations />} />
				<Route path="/cadastro" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/management"
					element={
						<PrivateRoute permission={permissions?.manage}>
							<Management />
						</PrivateRoute>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Container>
	);
};

export default Content;
