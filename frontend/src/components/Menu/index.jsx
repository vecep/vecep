import React from 'react';
import Link from 'components/Link';
import IconLink from 'components/IconLink';
import { Navbar, ToggleButton, Dropdown, DropdownContent, LoginLink } from './styles';
import PropTypes from 'prop-types';
import useDarkMode from 'hooks/useDarkMode';
import Avatar from '@mui/material/Avatar';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

const Menu = ({ toggleDarkMode }) => {
	const [isDarkMode] = useDarkMode();

	const loggedIn = false;
	const permissions = { canCreateExercises: true };
	const { canCreateExercises } = permissions;

	const handleLogout = () => {};

	return (
		<Navbar>
			<Link to="/home">VECEP</Link>

			<ToggleButton onClick={toggleDarkMode}>{isDarkMode ? `🌛` : `🌞`}</ToggleButton>
			<Link to="/exercicios">Exercícios</Link>
			<Link to="/provas">Provas</Link>
			{loggedIn && <Link to="/resultados">Resultados</Link>}

			<Dropdown>
				<Avatar alt="Imagem de perfil genérica" sx={{ height: '30px', width: '30px' }} />

				<DropdownContent>
					{!loggedIn ? (
						<div>
							<LoginLink to="/login">Faça login</LoginLink>
							{` ou `}
							<Link to="/cadastro">cadastre-se</Link>
						</div>
					) : (
						<>
							{canCreateExercises && (
								<IconLink icon={<AdminPanelSettingsIcon />} to="/admin">
									Admin
								</IconLink>
							)}

							<IconLink icon={<SettingsIcon />} to="/definicoes">
								Definições
							</IconLink>
							<IconLink icon={<LogoutIcon />} to="/home" onClick={handleLogout}>
								Logout
							</IconLink>
						</>
					)}
				</DropdownContent>
			</Dropdown>
		</Navbar>
	);
};

Menu.propTypes = {
	toggleDarkMode: PropTypes.func.isRequired
};

export default Menu;
