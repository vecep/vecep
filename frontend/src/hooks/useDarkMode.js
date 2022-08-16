import { ThemeContext } from 'contexts/ThemeContext';
import { useEffect, useContext } from 'react';

const useDarkMode = () => {
	const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
	const darkMode = localStorage.getItem('darkMode');

	const toggleDarkMode = () => {
		if (localStorage.getItem('darkMode') !== 'enabled') {
			localStorage.setItem('darkMode', 'enabled');
			setIsDarkMode(true);
		} else {
			localStorage.setItem('darkMode', null);
			setIsDarkMode(false);
		}
	};

	useEffect(() => {
		if (localStorage.getItem('darkMode') === 'enabled') {
			setIsDarkMode(true);
		} else {
			setIsDarkMode(false);
		}
	}, [darkMode]);

	return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
