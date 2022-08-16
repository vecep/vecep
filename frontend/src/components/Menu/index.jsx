import React, { useState, useEffect, useContext } from 'react';
import Link from 'components/Link';
import IconLink from 'components/IconLink';
import { Navbar, Logo, ToggleButton, Links, Dropdown, DropdownContent, LoginLink } from './styles';
import useDarkMode from 'hooks/useDarkMode';
import Avatar from '@mui/material/Avatar';
import AdminIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { Squash as Hamburger } from 'hamburger-react';
import * as authApi from 'services/auth';
import usePermissions from 'hooks/usePermissions';
import useMobile from 'hooks/useMobile';
import { stringToColor } from 'utils';
import { AuthContext } from 'contexts/AuthContext';

const Menu = () => {
	const [isDarkMode, toggleDarkMode] = useDarkMode();
	const [isMobile] = useMobile({ maxWidth: 770 });
	const { currentUser, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
	const permissions = usePermissions();

	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const handleLogout = () => {
		authApi.logout();
		setIsLoggedIn(false);
	};

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};

	useEffect(() => {
		!isMobile && setHamburgerOpen(false);
	}, [isMobile]);

	return (
		<Navbar>
			<Logo>
				<Link to="/home">VECEP</Link>
			</Logo>

			<Links open={hamburgerOpen} animate={!isMobile}>
				<ToggleButton onClick={toggleDarkMode}>{isDarkMode ? `🌛` : `🌞`}</ToggleButton>
				<Link to="/materias">Matérias</Link>
				<Link to="/provas">Provas</Link>
				{isLoggedIn && <Link to="/resultados">Resultados</Link>}

				<Dropdown>
					<Avatar
						alt={`Imagem de perfil ${
							currentUser?.username ? 'de: ' + currentUser.username : 'genérica'
						}`}
						sx={{
							height: '30px',
							width: '30px',
							bgcolor: currentUser && stringToColor(currentUser.username)
						}}
					>
						{currentUser?.username[0].charAt(0)}
					</Avatar>

					<DropdownContent animate={!isMobile} login={!isLoggedIn}>
						{!isLoggedIn ? (
							<>
								<LoginLink to="/login">Faça login</LoginLink>
								<Link to="/cadastro">Cadastre-se</Link>
							</>
						) : (
							<>
								{permissions?.manage && (
									<IconLink icon={<AdminIcon />} to="/management">
										{!isMobile && 'Admin'}
									</IconLink>
								)}

								<IconLink icon={<SettingsIcon />} to="/definicoes">
									{!isMobile && 'Definições'}
								</IconLink>
								<IconLink icon={<LogoutIcon />} to="/home" props={{ onClick: handleLogout }}>
									{!isMobile && 'Logout'}
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

export default Menu;
