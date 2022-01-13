import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from './styles.js';

const Content = () => {
	return (
		<Container>
			<Routes>
				<Route exact path="/" element={<Navigate to="/home" />} />
				<Route exact path="/home" element={<div>home</div>} />
				<Route path="/exercicios" element={<div>exercícios</div>} />
				<Route path="/provas" element={<div>provas</div>} />
				<Route path="/simulado" element={<div>simulado</div>} />
				<Route path="/definicoes" element={<div>definicoes</div>} />
				<Route path="/cadastro" element={<div>cadastro</div>} />
				<Route path="/login" element={<div>login</div>} />
				<Route path="*" element={<div>404</div>} />
			</Routes>
		</Container>
	);
};

export default Content;
