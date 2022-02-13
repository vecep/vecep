import React, { useState, useEffect } from 'react';
import Link from 'components/Link';
import IconLink from 'components/IconLink';
import { Navbar, Logo, ToggleButton, Links, Dropdown, DropdownContent, LoginLink } from './styles';
import PropTypes from 'prop-types';
import useDarkMode from 'hooks/useDarkMode';
import Avatar from '@mui/material/Avatar';
import AdminIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { Squash as Hamburger } from 'hamburger-react';
import useMediaQuery from '@mui/material/useMediaQuery';
import authApi from 'services/auth';
import usePermissions from 'hooks/usePermissions';

const Menu = ({ toggleDarkMode }) => {
	const [isDarkMode] = useDarkMode();
	const permissions = usePermissions();
	const matches = useMediaQuery('(min-width: 770px)');
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const isLoggedIn = JSON.parse(localStorage.getItem('user'))?.accessToken;

	const handleLogout = () => {
		authApi.logout();
	};

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};

	useEffect(() => {
		matches && setHamburgerOpen(false);
	}, [matches]);

	return (
		<Navbar>
			<Logo>
				<Link to="/home">VECEP</Link>
			</Logo>

			<Links open={hamburgerOpen} animate={matches}>
				<ToggleButton onClick={toggleDarkMode}>{isDarkMode ? `🌛` : `🌞`}</ToggleButton>
				<Link to="/exercicios">Exercícios</Link>
				<Link to="/provas">Provas</Link>
				{isLoggedIn && <Link to="/resultados">Resultados</Link>}

				<Dropdown>
					<Avatar alt="Imagem de perfil genérica" sx={{ height: '30px', width: '30px' }} />
					<DropdownContent animate={matches} login={!isLoggedIn}>
						{!isLoggedIn ? (
							<>
								<LoginLink to="/login">Faça login</LoginLink>
								<Link to="/cadastro">Cadastre-se</Link>
							</>
						) : (
							<>
								{permissions?.manage && (
									<IconLink icon={<AdminIcon />} to="/management">
										{matches && 'Admin'}
									</IconLink>
								)}

								<IconLink icon={<SettingsIcon />} to="/definicoes">
									{matches && 'Definições'}
								</IconLink>
								<IconLink icon={<LogoutIcon />} to="/home" onClick={handleLogout}>
									{matches && 'Logout'}
								</IconLink>
							</>
						)}
					</DropdownContent>
				</Dropdown>
			</Links>

			<Hamburger toggled={hamburgerOpen} toggle={toggleHamburger} size={20} />
		</Navbar>
	);
};

Menu.propTypes = {
	toggleDarkMode: PropTypes.func.isRequired
};

export default Menu;
